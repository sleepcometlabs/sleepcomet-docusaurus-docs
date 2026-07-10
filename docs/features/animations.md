---
title: Animações
description: Referência das 9 animações de legenda — famílias por palavra e de entrada, temporização e overrides ASS.
---

# Animações de legendas

O SleepComet oferece **9 tipos de animação**, divididos em duas famílias. A escolha certa depende do ritmo do conteúdo — consulte as [boas práticas](/best-practices#templates-de-legenda) para recomendações de uso.

## As duas famílias

| Família | Comportamento | Unidade no ASS |
|---|---|---|
| **Por palavra** | O efeito acontece na palavra falada, cronometrado ao timestamp real do Whisper | Um `Dialogue` por palavra |
| **Entrada** | O trecho inteiro entra na tela com uma transformação | Um `Dialogue` por trecho |

## Referência completa

### `none`

Sem animação. O trecho aparece e desaparece instantaneamente, em cor única. Indicado para conteúdo sóbrio e informativo.

### `karaoke` — por palavra

Todas as palavras ficam visíveis; a palavra falada troca para a `highlightColor` do template. O clássico das plataformas de cortes.

### `word` — por palavra

Reveal cumulativo: apenas as palavras já faladas ficam visíveis, e a frase cresce palavra a palavra.

### `highlight` — por palavra

Todas as palavras visíveis; a falada ganha uma **caixa** na cor de destaque (estilo Hormozi — `\bord` espesso com `\3c` no ASS). Alto impacto em falas enfáticas.

### `pop` — por palavra

A palavra falada entra com um scale-in rápido: 0,75 → 1,0 em 140 ms.

### `bounce` — por palavra

A palavra falada entra com overshoot elástico: 0,6 → 1,15 → 1,0 em 260 ms. Indicada para conteúdo de alta energia.

### `fade` — entrada

Fade in/out do trecho inteiro, com 350 ms em cada direção (`\fad(350,350)`). Indicada para conteúdo calmo e narrativo.

### `smooth` — entrada

Fade combinado com um deslize sutil de baixo para cima (`\move` de ~1,5% da altura em 300 ms + `\fad(250,250)`).

### `scale` — entrada

O trecho inteiro escala de 0,5 a 1,0 em 300 ms ao aparecer.

## Agrupamento de palavras (chunks)

As animações de entrada exibem o texto em grupos de palavras. O tamanho do grupo varia por animação:

| Animação | Palavras por grupo |
|---|---|
| Estilo minimal | 6 |
| `fade`, `none` | 4 |
| Demais | 3 |

## Exemplos de override ASS

Para quem trabalha diretamente com os arquivos de legenda exportados:

```text
; pop (por palavra)
{\fscx75\fscy75\t(0,140,\fscx100\fscy100)}

; bounce (por palavra)
{\fscx60\fscy60\t(0,120,\fscx115\fscy115)\t(120,260,\fscx100\fscy100)}

; fade (entrada)
{\fad(350,350)}

; scale (entrada)
{\fscx50\fscy50\t(0,300,\fscx100\fscy100)}
```

A geração completa dos arquivos ASS está documentada em [Sistema de legendas do worker](/api/worker-subtitles).

---

**Próximos passos:** [Templates de legendas](/features/caption-templates) · [Sistema de fontes](/features/fonts)
