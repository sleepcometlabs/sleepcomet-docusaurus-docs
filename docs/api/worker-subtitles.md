---
title: Sistema de Legendas
---

# Sistema de Legendas do Worker

## Formato ASS

O Sleepcomet gera legendas no formato ASS (Advanced SubStation Alpha).

### Estrutura do Arquivo

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

### Conversão de Cores

CSS hex → ASS `&HAABBGGRR`:

```python
def hex_to_ass_color(hex_color: str, default: str = "#FFFFFF") -> str:
    # #RRGGBB → &H00BBGGRR
    r, g, b = int(h[1:3], 16), int(h[3:5], 16), int(h[5:7], 16)
    return f"&H00{b:02X}{g:02X}{r:02X}"
```

### Cálculo de Posição

```python
def get_safe_vertical_position(pos_y: float, video_height: int) -> int:
    # pos_y é decimal (0.0-1.0)
    # Converte para pixels com margem de segurança
    y = int(pos_y * video_height)
    return max(60, min(video_height - 60, y))
```

### Escala de Fonte

```python
def get_scaled_font_size(base_size: int, video_width: int) -> int:
    # Escala proporcional à largura do vídeo
    return int(base_size * 0.52 / 310 * video_width)
```

## Animações

Cada tipo de animação gera overrides ASS específicos:

| Animação | Override ASS |
|---|---|
| `fade` | `{\fad(150,150)}` |
| `smooth` | `{\fad(250,250)}` |
| `pop` | `{\fscx92\fscy92\t(0,140,\fscx108\fscy108)\t(140,260,\fscx100\fscy100)}` |
| `bounce` | `{\fscx80\fscy80\t(0,180,\fscx115\fscy115)\t(180,300,\fscx100\fscy100)}` |
| `scale` | `{\fscx50\fscy50\t(0,250,\fscx100\fscy100)}` |
| `karaoke` | Destaque por palavra com `\c` override |

## Queima de Legendas (Burn-in)

As legendas ASS são queimadas no vídeo via FFmpeg:

```bash
ffmpeg -i clip.mp4 -vf "ass=clip.ass:fontsdir=fonts/" -c:v libx264 -crf 20 output.mp4
```

## Marca d'Água

Após a queima de legendas, uma marca d'água é sobreposta:

```python
overlay_watermark(
    input_path, output_path, watermark_path,
    opacity=0.05,           # 5% opacidade
    position="bottom-center",
    crf=20, preset="fast"
)
```
