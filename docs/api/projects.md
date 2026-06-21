---
title: Projetos
---

# API de Projetos

## Listar Projetos

```
GET /projects
```

**Response:**

```json
{
  "projects": [
    {
      "id": "uuid",
      "title": "Título do Projeto",
      "sourceUrl": "https://youtube.com/watch?v=...",
      "durationSec": 300,
      "duration": "5:00",
      "date": "2025-01-15",
      "clips": 8,
      "status": "Concluído",
      "thumbnail": "https://...",
      "stepProgress": {},
      "captionTemplate": "tiktok",
      "createdAt": "2025-01-15T10:00:00Z",
      "updatedAt": "2025-01-15T10:05:00Z"
    }
  ],
  "total": 25,
  "page": 1,
  "limit": 20
}
```

## Criar Projeto

```
POST /projects
```

**Body:**

```json
{
  "sourceUrl": "https://youtube.com/watch?v=...",
  "title": "Título Opcional",
  "thumbnail": "https://...",
  "durationSec": 300,
  "clipDurationPreset": "auto",
  "captionTemplate": "tiktok",
  "skipCuts": false
}
```

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `sourceUrl` | string | Sim | URL do vídeo |
| `title` | string | Não | Título personalizado |
| `thumbnail` | string | Não | Thumbnail URL |
| `durationSec` | number | Não | Duração em segundos |
| `clipDurationPreset` | string | Não | `auto`, `15-30`, `30-60`, `60-90` |
| `captionTemplate` | string | Não | ID do template ou JSON customizado |
| `skipCuts` | boolean | Não | Pular geração de clipes |

**Response:** `201 Created`

```json
{
  "projectId": "uuid",
  "project": { ... }
}
```

## Detalhe do Projeto

```
GET /projects/:id
```

**Response:**

```json
{
  "project": { ... },
  "clips": [
    {
      "id": "uuid",
      "projectId": "uuid",
      "title": "Clipe 1",
      "score": 92,
      "duration": "0:30",
      "quality": "1080p",
      "thumbnail": "https://...",
      "url": "https://r2...",
      "subtitleUrl": "https://r2...",
      "startSec": 120,
      "endSec": 150,
      "transcripts": [
        {
          "id": "uuid",
          "start": "0:00",
          "end": "0:02",
          "text": "Texto da transcrição"
        }
      ],
      "createdAt": "2025-01-15T10:05:00Z"
    }
  ]
}
```

## Excluir Projeto

```
DELETE /projects/:id
```

**Response:** `{ "projectId": "uuid", "deleted": true }`

## Cancelar Processamento

```
POST /projects/:id/cancel
```

**Response:** `{ "projectId": "uuid", "status": "Cancelado" }`
