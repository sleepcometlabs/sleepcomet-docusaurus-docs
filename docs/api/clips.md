---
title: Clipes
description: Endpoints de agendamento de clipes — individual, em lote e listagem de publicações programadas.
---

# API de clipes

Os clipes são criados pelo processamento e lidos pelo [detalhe do projeto](/api/projects#detalhe-do-projeto). Os endpoints abaixo cobrem a publicação: agendamento individual, em lote e a listagem de agendamentos.

## Agendar clipe

```
POST /clips/:clipId/schedule
```

**Body:**

```json
{
  "provider": "tiktok",
  "title": "Título do post",
  "scheduledAt": "2026-07-20T14:00:00Z"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `provider` | string | `tiktok`, `instagram` ou `youtube` — requer [integração](/api/integrations) ativa |
| `title` | string | Título/legenda da publicação |
| `scheduledAt` | string | Data e hora em ISO 8601 (UTC) |

**Resposta:** `201 Created`

```json
{
  "id": "uuid",
  "userId": "uuid",
  "clipId": "uuid",
  "projectId": "uuid",
  "provider": "tiktok",
  "title": "Título do post",
  "scheduledAt": "2026-07-20T14:00:00Z",
  "status": "pending",
  "createdAt": "2026-07-09T10:00:00Z"
}
```

## Listar agendamentos

```
GET /clips/scheduled
```

Aceita [paginação](/api/errors#paginação) (`page`, `limit`).

**Resposta:**

```json
{
  "scheduledPosts": [...],
  "total": 15,
  "page": 1,
  "limit": 20
}
```

## Agendar em lote

```
POST /projects/:id/bulk-schedule
```

Agenda vários clipes de um projeto com intervalo fixo entre publicações.

**Body:**

```json
{
  "scheduledAt": "2026-07-20T14:00:00Z",
  "intervalHours": 2,
  "providers": ["tiktok", "instagram"],
  "caption": "Legenda personalizada (opcional)"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `scheduledAt` | string | Data/hora da primeira publicação (ISO 8601, UTC) |
| `intervalHours` | number | Intervalo entre publicações consecutivas |
| `providers` | string[] | Redes de destino |
| `caption` | string | Legenda de publicação opcional, aplicada a todos os clipes |

**Resposta:**

```json
{
  "scheduledPosts": [...],
  "count": 8
}
```

## Ciclo de status

Os agendamentos transitam por `pending → publishing → published` (ou `failed`) — a referência completa está em [API de agendamento](/api/scheduling#status-dos-agendamentos).

---

**Próximos passos:** [Agendamento](/api/scheduling) · [Integrações](/api/integrations)
