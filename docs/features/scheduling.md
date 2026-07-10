---
title: Agendamento
description: Programe publicações individuais ou em lote no TikTok, Instagram e YouTube, com controle de status de ponta a ponta.
---

# Agendamento de publicações

O agendamento permite programar a publicação dos clipes nas redes conectadas — individualmente ou em lote — e acompanhar cada publicação até a confirmação.

:::info Disponibilidade
O agendamento está disponível nos planos **Pro** e **Enterprise**. Consulte [Planos e preços](/account/pricing).
:::

## Agendamento individual

1. No card do clipe, clique em **Publicar**;
2. Selecione a rede social de destino;
3. Escolha data e hora;
4. Confirme o agendamento.

## Agendamento em lote

Na página do projeto, **Agendar em Lote** programa vários clipes de uma vez:

1. Selecione os clipes desejados;
2. Defina a data/hora inicial e o **intervalo entre publicações**;
3. Escolha as redes de destino;
4. Adicione uma legenda de publicação personalizada (opcional).

:::tip Intervalo recomendado
Um intervalo de 2 a 4 horas entre publicações evita saturar o feed e permite comparar o desempenho de cada corte. Veja [Boas práticas](/best-practices#publicação-e-agendamento).
:::

## Ciclo de vida de uma publicação

| Status | Significado |
|---|---|
| `pending` | Aguardando a data programada |
| `publishing` | Publicação em andamento |
| `published` | Publicada com sucesso |
| `failed` | Falha na publicação — a mensagem de erro fica registrada no evento |

Publicações com falha são geralmente causadas por token de integração expirado ou limites da rede de destino — consulte [Solução de problemas](/troubleshooting#a-publicação-falhou-com-status-failed).

## Calendário

Todas as publicações agendadas podem ser visualizadas e filtradas no [calendário](/features/calendar) (`/calendar`).

## Fluxo técnico

1. O frontend envia `POST /projects/:id/bulk-schedule` (ou `POST /clips/:clipId/schedule` para agendamento individual);
2. A API grava os registros em `scheduled_posts`;
3. O worker monitora a agenda e executa a publicação no horário programado, usando o token OAuth da integração;
4. O status é atualizado a cada transição.

A referência completa dos endpoints está em [API de agendamento](/api/scheduling).

---

**Próximos passos:** [Calendário](/features/calendar) · [Integrações](/features/integrations)
