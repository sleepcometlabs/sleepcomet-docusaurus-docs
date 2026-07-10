---
title: Clipes
description: Como os clipes são apresentados — score de viralidade, prévia, transcrição e ações de download e publicação.
---

# Clipes

Cada clipe é um trecho selecionado pela IA a partir do vídeo original, entregue pronto para publicação: renderizado no formato vertical, legendado e classificado por potencial de engajamento.

## Score de viralidade

Todo clipe recebe uma pontuação de **0 a 100**, calculada a partir de:

- **Relevância** — impacto do conteúdo do trecho;
- **Duração** — ritmo adequado ao formato curto;
- **Engajamento** — presença de emoção ou surpresa;
- **Completude** — início e fim naturais da narrativa.

| Faixa | Classificação | Indicador |
|---|---|---|
| 90–100 | Excelente potencial viral | Roxo |
| 80–89 | Bom potencial | Verde |
| 70–79 | Potencial médio | Âmbar |
| < 70 | Potencial baixo | Neutro |

O algoritmo completo está descrito em [Sistema de scoring](/features/scoring).

## O card do clipe

Cada clipe é apresentado em um card com:

- **Prévia em vídeo** com player integrado ([detalhes](/features/preview));
- **Score** em indicador circular com a cor da classificação;
- **Título** gerado para o clipe;
- **Duração** e **qualidade** de saída;
- **Transcrição** completa com timestamps.

## Ações disponíveis

| Ação | Resultado |
|---|---|
| **Download** | Baixa o vídeo renderizado (`.mp4`) |
| **Legendas** | Baixa o arquivo de legenda (`.ass`; SRT/VTT nos planos Pro+) |
| **Publicar** | Publica ou [agenda](/features/scheduling) nas redes conectadas |

## Ordenação e navegação

- **Por score** (padrão) — os melhores candidatos primeiro;
- **Cronológica** — na ordem em que aparecem no vídeo original.

A barra lateral lista todos os clipes do projeto com thumbnail, título, score e duração, com rolagem automática até o clipe selecionado.

---

**Próximos passos:** [Sistema de scoring](/features/scoring) · [Agendamento](/features/scheduling)
