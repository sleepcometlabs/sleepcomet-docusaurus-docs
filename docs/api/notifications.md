---
title: Notificações
description: Endpoints de notificações do usuário — listagem e marcação de leitura.
---

# API de notificações

A plataforma gera notificações para eventos relevantes da conta — conclusão ou falha de processamento e publicações agendadas, entre outros.

## Listar notificações

```
GET /notifications
```

**Resposta:**

```json
{
  "notifications": [
    {
      "id": "uuid",
      "type": "project_completed",
      "title": "Processamento concluído",
      "message": "Seu projeto \"Podcast #42\" gerou 8 clipes.",
      "read": false,
      "createdAt": "2026-07-09T10:05:00Z"
    }
  ]
}
```

## Marcar todas como lidas

```
POST /notifications/read
```

**Resposta:** `{ "status": "ok" }`

## Marcar uma notificação como lida

```
POST /notifications/:id/read
```

**Resposta:** `{ "status": "ok" }`

---

**Próximos passos:** [SSE Status](/api/sse-status) · [Projetos](/api/projects)
