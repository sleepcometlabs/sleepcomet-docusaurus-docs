---
title: Animações
---

# Animações de Legendas

O Sleepcomet suporta 9 tipos de animação para legendas.

## Tipos Disponíveis

### None
Sem animação. Aparece e desaparece instantaneamente.

### Karaoke
Destaca cada palavra individualmente enquanto é falada. Usa a `highlightColor` do template.

### Pop
Efeito de escala: começa em 92%, cresce para 108%, depois estabiliza em 100%. Duração: 260ms.

### Fade
Fade in/out suave com duração de 150ms em cada direção.

### Bounce
Efeito de quicada: começa em 80%, sobe para 115%, estabiliza em 100%. Duração: 300ms.

### Word
Aparecimento palavra por palavra, similar ao karaoke mas sem destaque de cor.

### Scale
Reveal com escala: começa em 50%, cresce para 100%. Duração: 250ms.

### Smooth
Transição suave com fade de 250ms.

### Highlight
Destaque progressivo das palavras com cor de destaque.

## Chunk Size

Cada animação define o tamanho do "chunk" (palavras por grupo):

| Animação | Chunk Size |
|---|---|
| minimal | 6 palavras |
| fade, none | 4 palavras |
| Outras | 3 palavras |

## Exemplo de Override ASS

Animação `pop`:
```
{\fscx92\fscy92\t(0,140,\fscx108\fscy108)\t(140,260,\fscx100\fscy100)}
```

Animação `bounce`:
```
{\fscx80\fscy80\t(0,180,\fscx115\fscy115)\t(180,300,\fscx100\fscy100)}
```

Animação `fade`:
```
{\fad(150,150)}
```
