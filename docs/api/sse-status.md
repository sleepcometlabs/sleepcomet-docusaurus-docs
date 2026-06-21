---
title: SSE Status
---

# Server-Sent Events (SSE)

O status de processamento é transmitido em tempo real via SSE.

## Endpoint

```
GET /projects/:id/status
```

## Formato das Mensagens

Cada mensagem é um JSON com os campos:

```json
{
  "stepId": "enrich",
  "projectId": "uuid",
  "progress": 75,
  "stepStatus": "active",
  "message": "Gerando legendas para o clipe 3/8...",
  "status": "Processando"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `stepId` | string | ID da etapa atual |
| `projectId` | string | ID do projeto |
| `progress` | number | Progresso da etapa (0–100) |
| `stepStatus` | string | `active`, `done`, `failed` |
| `message` | string | Mensagem descritiva |
| `status` | string | Status geral do projeto |

## Status do Projeto

| Status | Descrição |
|---|---|
| `Aguardando` | Na fila de processamento |
| `Processando` | Em processamento |
| `Concluído` | Processamento finalizado |
| `Falhou` | Erro no processamento |
| `Cancelado` | Cancelado pelo usuário |

## Uso no Frontend

```typescript
const es = new EventSource(`/api/projects/${id}/status`)

es.onmessage = (event) => {
  const msg = JSON.parse(event.data)
  
  if (msg.stepId) {
    // Atualizar progresso da etapa
  }
  
  if (["Concluído", "Falhou", "Cancelado"].includes(msg.status)) {
    es.close()
  }
}

es.onerror = () => {
  es.close()
}
```

## Etapas da Pipeline

| stepId | Descrição |
|---|---|
| `analyze` | Análise da URL |
| `download` | Download do vídeo |
| `trim` | Corte do intervalo |
| `audio` | Extração de áudio |
| `fast_transcribe` | Transcrição rápida |
| `clips` | Geração de clipes |
| `enrich` | Legendas e enriquecimento |
| `publish` | Publicação final |
