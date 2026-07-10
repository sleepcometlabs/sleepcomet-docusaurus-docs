---
title: Pipeline do Worker
description: Documentação interna do worker Python — consumo da fila, estrutura do job, etapas e configuração.
---

# Pipeline do worker

:::note Documentação interna
Esta página descreve o funcionamento interno do worker de processamento. Ela é útil para depuração avançada e integração de infraestrutura — o uso normal da plataforma não exige esse conhecimento.
:::

O worker é um serviço Python assíncrono que consome jobs de uma fila Redis e executa todo o processamento de mídia.

## Consumo de jobs

O worker faz `BRPOP` na fila; a API publica com `LPUSH`:

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

## Estrutura do job

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

O campo `captionTemplate` carrega o ID de um template built-in **ou** o JSON completo de um template customizado — já validado e ajustado pela API antes da publicação na fila.

## Etapas de execução

```
handle_job()
  ├── run_analyze()        → metadados via yt-dlp
  ├── run_download()       → download do vídeo
  ├── run_trim()           → corte inicial/final
  ├── run_audio()          → extração WAV 16 kHz mono
  ├── run_separate()       → separação de vocais (Demucs, opcional)
  ├── run_transcribe()     → transcrição Whisper com timing por palavra
  ├── run_clips()          → seleção de momentos + score de viralidade
  ├── run_enrich()         → legendas ASS + marca d'água
  └── run_publish_clips()  → upload R2 + notificação
```

Cada etapa reporta progresso, retransmitido ao cliente via [SSE](/api/sse-status).

## Configuração do worker

| Variável | Padrão | Função |
|---|---|---|
| `CAPTION_TEMPLATE` | `tiktok` | Template usado quando nenhum é informado |
| `WHISPER_MODEL` | `small` | Modelo Whisper para transcrição |
| `WHISPER_DEVICE` | `cpu` | Dispositivo de inferência (`cpu`/`cuda`) |
| `CLIP_VERTICAL` | `true` | Saída vertical 9:16 com reenquadramento |
| `CLIP_CRF` | `20` | Qualidade do codec H.264 |
| `CLIP_PRESET` | `fast` | Preset de encoding do FFmpeg |
| `FACE_DETECT` | `true` | Detecção de rosto no reenquadramento |

## Resolução de template

```python
def get_template(template_name: str) -> Dict[str, Any]:
    # Se começa com "{", é JSON customizado
    if template_name and template_name.strip().startswith("{"):
        custom_tpl = json.loads(template_name)
        # Converte camelCase → snake_case
        # Mescla com o template "default" como base
        default_tpl = CAPTION_TEMPLATES["default"].copy()
        default_tpl.update(mapped)
        return default_tpl

    # Caso contrário, busca no dicionário de templates built-in
    return CAPTION_TEMPLATES.get(template_name, CAPTION_TEMPLATES["default"])
```

## Geração de legendas

A construção do arquivo ASS (fontes, cores, posicionamento, animações e burn-in) está documentada em [Sistema de legendas do worker](/api/worker-subtitles).

---

**Próximos passos:** [Sistema de legendas do worker](/api/worker-subtitles) · [Arquitetura](/architecture)
