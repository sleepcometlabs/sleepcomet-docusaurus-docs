---
title: Pipeline do Worker
---

# Pipeline do Worker

O worker Python processa vídeos de forma assíncrona via fila Redis.

## Consumo de Jobs

```python
# worker/app/queue.py
async def pop_async(self, timeout: int = 5) -> Job | None:
    item = await self._r.brpop(self._key, timeout=timeout)
    if not item:
        return None
    _, raw = item
    data = json.loads(raw)
    return Job.from_dict(data)
```

## Estrutura do Job

```json
{
  "jobId": "process-uuid",
  "projectId": "uuid",
  "url": "https://youtube.com/watch?v=...",
  "uploadedFileKey": "",
  "action": "process",
  "startTrimSec": 0,
  "endTrimSec": 300,
  "clipDurationPreset": "auto",
  "captionTemplate": "tiktok",
  "skipCuts": false
}
```

## Pipeline de Processamento

```
handle_job()
  ├── run_analyze()      → metadados via yt-dlp
  ├── run_download()     → download do vídeo
  ├── run_trim()         → corte inicial/final
  ├── run_audio()        → extração WAV
  ├── run_separate()     → separação de vocais (Demucs)
  ├── run_transcribe()   → transcrição Whisper
  ├── run_clips()        → IA seleciona momentos
  ├── run_enrich()       → legendas ASS + watermark
  └── run_publish_clips() → upload R2 + notificação
```

## Configurações do Worker

| Variável | Default | Descrição |
|---|---|---|
| `CAPTION_TEMPLATE` | `tiktok` | Template padrão |
| `WHISPER_MODEL` | `small` | Modelo Whisper |
| `WHISPER_DEVICE` | `cpu` | Device (cpu/cuda) |
| `CLIP_VERTICAL` | `true` | Output vertical 9:16 |
| `CLIP_CRF` | `20` | Qualidade do codec |
| `CLIP_PRESET` | `fast` | Preset do codec |
| `FACE_DETECT` | `true` | Detecção de rosto |

## Template Resolution

```python
def get_template(template_name: str) -> Dict[str, Any]:
    # Se começa com "{", é JSON customizado
    if template_name and template_name.strip().startswith("{"):
        custom_tpl = json.loads(template_name)
        # Converte camelCase → snake_case
        # Mescla com template "default"
        default_tpl = CAPTION_TEMPLATES["default"].copy()
        default_tpl.update(mapped)
        return default_tpl
    
    # Senão, busca no dict de templates built-in
    return CAPTION_TEMPLATES.get(template_name, CAPTION_TEMPLATES["default"])
```

## Geração de ASS

O arquivo ASS é gerado em `ass_builder.py`:

1. Resolve a fonte via `font_registry.py`
2. Calcula tamanho proporcional à resolução
3. Converte cores hex para formato ASS (`&HAABBGGRR`)
4. Gera eventos `Dialogue` com chunks de palavras
5. Aplica overrides de animação (`\fad`, `\fscx`, `\t`)
6. Posiciona com `\pos(x,y)` baseado em `position_y`
