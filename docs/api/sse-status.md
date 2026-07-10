---
title: SSE Status
description: Acompanhamento do processamento em tempo real via Server-Sent Events — formato das mensagens, etapas e exemplo de consumo.
---

# Server-Sent Events (SSE)

O progresso do processamento é transmitido em tempo real por **Server-Sent Events**, permitindo acompanhar cada etapa da pipeline sem polling.

## Endpoint

```
GET /projects/:id/status
```

A conexão permanece aberta durante o processamento e envia uma mensagem a cada atualização de progresso.

## Formato das mensagens

Cada mensagem é um JSON:

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
| `stepId` | string | Etapa atual da pipeline (ver tabela abaixo) |
| `projectId` | string | ID do projeto |
| `progress` | number | Progresso da etapa (0–100) |
| `stepStatus` | string | `active`, `done` ou `failed` |
| `message` | string | Mensagem descritiva do momento atual |
| `status` | string | Status geral do projeto |

## Etapas da pipeline

| `stepId` | Etapa |
|---|---|
| `analyze` | Análise da URL |
| `download` | Download do vídeo |
| `trim` | Corte do intervalo |
| `audio` | Extração de áudio |
| `fast_transcribe` | Transcrição rápida |
| `clips` | Geração de cortes |
| `enrich` | Legendas e enriquecimento |
| `publish` | Publicação final |

A descrição de cada etapa está em [Pipeline de processamento](/features/pipeline).

## Status do projeto

| Status | Significado |
|---|---|
| `Aguardando` | Na fila de processamento |
| `Processando` | Pipeline em execução |
| `Concluído` | Processamento finalizado |
| `Falhou` | Erro no processamento |
| `Cancelado` | Cancelado pelo usuário |

## Exemplo de consumo

```typescript
const es = new EventSource(`/api/projects/${id}/status`);

es.onmessage = (event) => {
  const msg = JSON.parse(event.data);

  if (msg.stepId) {
    // atualizar o progresso da etapa na interface
  }

  if (["Concluído", "Falhou", "Cancelado"].includes(msg.status)) {
    es.close();
  }
};

es.onerror = () => {
  es.close();
};
```

:::tip Encerre a conexão
Feche o `EventSource` ao receber um status terminal (`Concluído`, `Falhou`, `Cancelado`) para liberar a conexão.
:::

---

**Próximos passos:** [Projetos](/api/projects) · [Pipeline do worker](/api/worker-pipeline)
