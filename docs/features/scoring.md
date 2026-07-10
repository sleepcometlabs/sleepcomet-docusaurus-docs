---
title: Sistema de Scoring
description: Como a IA calcula o score de viralidade de cada clipe e como interpretar as faixas de pontuação.
---

# Sistema de scoring

Cada clipe gerado recebe um **score de viralidade** de 0 a 100, calculado pela IA durante a etapa de geração de cortes. O score existe para responder a uma pergunta prática: *qual clipe publicar primeiro?*

## Fatores do algoritmo

| Fator | O que mede |
|---|---|
| **Densidade de informação** | Quantidade de conteúdo relevante por segundo |
| **Ritmo de fala** | Velocidade e entonação do locutor |
| **Presença de emoção** | Momentos de impacto, surpresa ou ênfase |
| **Completude narrativa** | Se o trecho tem início, meio e fim |
| **Potencial de compartilhamento** | Probabilidade estimada de viralização |

## Faixas de pontuação

| Faixa | Classificação | Indicador visual |
|---|---|---|
| 90–100 | Excelente | Roxo |
| 80–89 | Bom | Verde |
| 70–79 | Médio | Âmbar |
| < 70 | Baixo | Neutro |

## Como interpretar

- O score é **relativo ao conteúdo do próprio vídeo** — um vídeo rico em momentos fortes produz vários scores altos; um vídeo homogêneo, não;
- Scores baixos não significam clipes inúteis: significam menor probabilidade estimada de viralização orgânica;
- Use a [ordenação por score](/features/clips#ordenação-e-navegação) para priorizar publicações e o [agendamento em lote](/features/scheduling#agendamento-em-lote) para distribuir os demais.

## Visualização

O score aparece como um indicador circular no card do clipe — o anel é preenchido proporcionalmente à pontuação, na cor da faixa correspondente.

---

**Próximos passos:** [Clipes](/features/clips) · [Boas práticas](/best-practices#publicação-e-agendamento)
