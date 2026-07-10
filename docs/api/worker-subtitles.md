---
title: Sistema de Legendas
description: Documentação interna da geração de legendas ASS — estrutura, conversões, animações, burn-in e marca d'água.
---

# Sistema de legendas do worker

:::note Documentação interna
Esta página descreve como o worker gera e queima as legendas nos vídeos. Para configurar o estilo das legendas, use [Templates de legendas](/features/caption-templates).
:::

## Formato ASS

As legendas são geradas em **ASS (Advanced SubStation Alpha)** — o formato que suporta estilos, posicionamento absoluto e as transformações usadas pelas animações.

### Estrutura do arquivo

```ass
[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour,
        OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut,
        ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow,
        Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Inter,36,&H00FFFFFF,&H000000FF,&H00000000,
       &H80000000,1,0,0,0,100,100,0,0,3,2,0,5,60,60,60,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,{\pos(540,1440)}Texto da legenda
```

## Conversões

### Cores

CSS hexadecimal → formato ASS `&HAABBGGRR` (ordem de canais invertida):

```python
def hex_to_ass_color(hex_color: str, default: str = "#FFFFFF") -> str:
    # #RRGGBB → &H00BBGGRR
    r, g, b = int(h[1:3], 16), int(h[3:5], 16), int(h[5:7], 16)
    return f"&H00{b:02X}{g:02X}{r:02X}"
```

### Posição vertical

O `positionY` do template (percentual) é convertido para pixels com margem de segurança:

```python
def get_safe_vertical_position(pos_y: float, video_height: int) -> int:
    # pos_y é decimal (0.0–1.0)
    y = int(pos_y * video_height)
    return max(60, min(video_height - 60, y))
```

### Escala de fonte

O tamanho da fonte é proporcional à largura do vídeo — a mesma escala reproduzida na prévia do editor:

```python
def get_scaled_font_size(base_size: int, video_width: int) -> int:
    return int(base_size * 0.52 / 310 * video_width)
```

## Pipeline de geração

O arquivo ASS é construído em `ass_builder.py`:

1. Resolve a fonte via `font_registry.py` ([sistema de fontes](/features/fonts));
2. Calcula o tamanho proporcional à resolução de saída;
3. Converte as cores hexadecimais para o formato ASS;
4. Gera os eventos `Dialogue` — um por palavra (animações por palavra) ou um por trecho (animações de entrada);
5. Aplica os overrides de animação (`\fad`, `\fscx`, `\t`, `\move`);
6. Posiciona com `\pos(x,y)` a partir do `positionY` do template.

## Animações

| Animação | Override ASS |
|---|---|
| `fade` | `{\fad(350,350)}` |
| `smooth` | `\move` (~1,5% da altura em 300 ms) + `{\fad(250,250)}` |
| `pop` | `{\fscx75\fscy75\t(0,140,\fscx100\fscy100)}` na palavra falada |
| `bounce` | `{\fscx60\fscy60\t(0,120,\fscx115\fscy115)\t(120,260,\fscx100\fscy100)}` |
| `scale` | `{\fscx50\fscy50\t(0,300,\fscx100\fscy100)}` |
| `karaoke` | Troca de cor da palavra falada via override `\c` |
| `highlight` | Caixa na cor de destaque via `\bord` espesso + `\3c` |

A referência completa do comportamento de cada animação está em [Animações](/features/animations).

## Burn-in

As legendas são queimadas no vídeo pelo FFmpeg, com o diretório de fontes resolvido:

```bash
ffmpeg -i clip.mp4 -vf "ass=clip.ass:fontsdir=fonts/" -c:v libx264 -crf 20 output.mp4
```

## Marca d'água

Após o burn-in, a marca d'água é sobreposta conforme o template (posição, opacidade e tamanho) e as regras do plano:

```python
overlay_watermark(
    input_path, output_path, watermark_path,
    opacity=0.5,             # watermarkOpacity / 100
    position="bottom-right",
    crf=20, preset="fast",
)
```

No plano Free, `watermarkEnabled` é reimposto como `true` pela API antes de o job chegar ao worker — ver [Segurança](/security#regras-de-plano-aplicadas-no-servidor).

---

**Próximos passos:** [Pipeline do worker](/api/worker-pipeline) · [Templates de legendas](/features/caption-templates)
