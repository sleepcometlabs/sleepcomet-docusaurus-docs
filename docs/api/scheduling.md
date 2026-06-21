---
title: Agendamento
---

# API de Agendamento

## Agendar Clipe Individual

```
POST /clips/:clipId/schedule
```

Veja [Clipes](/api/clips) para detalhes.

## Listar Agendamentos

```
GET /clips/scheduled
```

Veja [Clipes](/api/clips) para detalhes.

## Agendar em Lote

```
POST /projects/:id/bulk-schedule
```

Veja [Clipes](/api/clips) para detalhes.

## Status dos Agendamentos

| Status | Descrição |
|---|---|
| `pending` | Aguardando data de publicação |
| `publishing` | Publicando agora |
| `published` | Publicado com sucesso |
| `failed` | Erro na publicação (ver `errorMessage`) |
