---
title: Sistema de Scoring
---

# Sistema de Scoring

O score de viralidade é calculado por IA para cada clipe.

## Algoritmo

O score é baseado em múltiplos fatores:

1. **Densidade de informação**: Quantidade de conteúdo relevante por segundo
2. **Ritmo de fala**: Velocidade e entonação do locutor
3. **Presença de emoção**: Detecção de momentos impactantes
4. **Completade narrativa**: Se o clipe tem início, meio e fim
5. **Potencial de compartilhamento**: Probabilidade de viralização

## Categorias

| Faixa | Classificação | Cor |
|---|---|---|
| 90–100 | Excelente | `text-purple-500` |
| 80–89 | Bom | `text-emerald-500` |
| 70–79 | Médio | `text-amber-500` |
| < 70 | Baixo | Neutro |

## Visualização

O score é exibido como um indicador circular no card do clipe:

```tsx
<svg className="size-full -rotate-90">
  <circle cx="20" cy="20" r="17" className="fill-none stroke-muted/20" />
  <circle
    cx="20" cy="20" r="17"
    className={`fill-none ${scoreColor}`}
    strokeDasharray={`${2 * Math.PI * 17}`}
    strokeDashoffset={`${2 * Math.PI * 17 * (1 - score / 100)}`}
  />
</svg>
<span className="absolute text-[11px] font-black">{score}</span>
```
