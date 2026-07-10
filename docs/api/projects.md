---
title: Projetos
description: CRUD completo de projetos — criação, listagem, detalhe com clipes, cancelamento e exclusão.
---

# API de projetos

O projeto é o recurso central da API: representa um vídeo enviado para processamento, com suas configurações, status e clipes resultantes.

## Listar projetos

```
GET /projects
```

Aceita [paginação](/api/errors#paginação) (`page`, `limit`).

**Resposta:**

```json
{
  "projects": [
    {
      "id": "uuid",
      "title": "Título do Projeto",
      "sourceUrl": "https://youtube.com/watch?v=...",
      "durationSec": 300,
      "duration": "5:00",
      "date": "2026-07-09",
      "clips": 8,
      "status": "Concluído",
      "thumbnail": "https://...",
      "stepProgress": {},
      "captionTemplate": "tiktok",
      "createdAt": "2026-07-09T10:00:00Z",
      "updatedAt": "2026-07-09T10:05:00Z"
    }
  ],
  "total": 25,
  "page": 1,
  "limit": 20
}
```

## Criar projeto

```
POST /projects
```

**Body:**

```json
{
  "sourceUrl": "https://youtube.com/watch?v=...",
  "title": "Título opcional",
  "thumbnail": "https://...",
  "durationSec": 300,
  "clipDurationPreset": "auto",
  "captionTemplate": "tiktok",
  "skipCuts": false
}
```

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `sourceUrl` | string | Sim* | URL do vídeo (YouTube/Vimeo). *Alternativa: `fileKey` de um [upload](/api/videos#upload-de-arquivo). |
| `title` | string | Não | Título personalizado do projeto |
| `thumbnail` | string | Não | URL da thumbnail |
| `durationSec` | number | Não | Duração do trecho, em segundos |
| `clipDurationPreset` | string | Não | `auto`, `15-30`, `30-60`, `60-90` |
| `captionTemplate` | string | Não | ID de um template salvo **ou** JSON de [template customizado](/features/caption-templates#template-customizado-em-json) |
| `skipCuts` | boolean | Não | `true` para apenas transcrever/legendar, sem gerar cortes |

**Resposta:** `201 Created`

```json
{
  "projectId": "uuid",
  "project": { ... }
}
```

:::info Validação no servidor
A criação verifica o saldo de créditos e ajusta os parâmetros do template para as faixas válidas antes de publicar o job. Veja [Erros e convenções](/api/errors#validação-e-ajuste-no-servidor).
:::

## Detalhe do projeto

```
GET /projects/:id
```

**Resposta:**

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
      "url": "https://...",
      "subtitleUrl": "https://...",
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
      "createdAt": "2026-07-09T10:05:00Z"
    }
  ]
}
```

## Cancelar processamento

```
POST /projects/:id/cancel
```

Cancela um processamento em andamento. O projeto é removido e **nenhum crédito é cobrado**.

**Resposta:** `{ "projectId": "uuid", "status": "Cancelado" }`

## Excluir projeto

```
DELETE /projects/:id
```

**Resposta:** `{ "projectId": "uuid", "deleted": true }`

## Status em tempo real

O progresso do processamento é transmitido via Server-Sent Events em `GET /projects/:id/status` — documentado em [SSE Status](/api/sse-status).

---

**Próximos passos:** [SSE Status](/api/sse-status) · [Clipes](/api/clips)
