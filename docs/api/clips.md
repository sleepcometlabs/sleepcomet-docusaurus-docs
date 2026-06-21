---
title: Clipes
---

# API de Clipes

## Agendar Clipe

```
POST /clips/:clipId/schedule
```

**Body:**

```json
{
  "provider": "tiktok",
  "title": "Título do post",
  "scheduledAt": "2025-01-20T14:00:00Z"
}
```

**Response:**

```json
{
  "id": "uuid",
  "userId": "uuid",
  "clipId": "uuid",
  "projectId": "uuid",
  "provider": "tiktok",
  "title": "Título do post",
  "scheduledAt": "2025-01-20T14:00:00Z",
  "status": "pending",
  "createdAt": "2025-01-15T10:00:00Z"
}
```

## Listar Agendamentos

```
GET /clips/scheduled
```

**Query Parameters:**

| Param | Tipo | Descrição |
|---|---|---|
| `page` | number | Página (default: 1) |
| `limit` | number | Itens por página (default: 20) |

**Response:**

```json
{
  "scheduledPosts": [...],
  "total": 15,
  "page": 1,
  "limit": 20
}
```

## Agendar em Lote

```
POST /projects/:id/bulk-schedule
```

**Body:**

```json
{
  "scheduledAt": "2025-01-20T14:00:00Z",
  "intervalHours": 2,
  "providers": ["tiktok", "instagram"],
  "caption": "Legenda personalizada (opcional)"
}
```

**Response:**

```json
{
  "scheduledPosts": [...],
  "count": 8
}
```
