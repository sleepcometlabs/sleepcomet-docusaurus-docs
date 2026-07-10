---
title: Agendamento
description: Visão consolidada dos endpoints de agendamento e do ciclo de vida das publicações.
---

# API de agendamento

O agendamento é operado por três endpoints, documentados em detalhe na [API de clipes](/api/clips):

| Método | Endpoint | Função |
|---|---|---|
| POST | `/clips/:clipId/schedule` | [Agendar um clipe individual](/api/clips#agendar-clipe) |
| GET | `/clips/scheduled` | [Listar agendamentos](/api/clips#listar-agendamentos) |
| POST | `/projects/:id/bulk-schedule` | [Agendar clipes em lote](/api/clips#agendar-em-lote) |

## Status dos agendamentos

Cada publicação agendada transita pelo seguinte ciclo:

| Status | Significado |
|---|---|
| `pending` | Aguardando a data programada |
| `publishing` | Publicação em andamento no provedor |
| `published` | Publicada com sucesso |
| `failed` | Falha na publicação — o campo `errorMessage` traz o motivo |

## Execução

A publicação é executada pelo worker no horário programado, usando o token OAuth da [integração](/api/integrations) correspondente. Se o token estiver expirado ou revogado, a publicação falha com `failed` — reconectar a integração resolve os casos mais comuns (ver [Solução de problemas](/troubleshooting#a-publicação-falhou-com-status-failed)).

:::info Disponibilidade por plano
O agendamento está disponível nos planos **Pro** e **Enterprise**.
:::

---

**Próximos passos:** [API de clipes](/api/clips) · [Agendamento (guia)](/features/scheduling)
