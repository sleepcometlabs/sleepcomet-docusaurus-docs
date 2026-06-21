---
title: API Reference
slug: /api/
---

# API Reference

Todas as endpoints da API REST do Sleepcomet.

## Base URL

```
https://api.sleepcomet.com/api
```

## Autenticação

Todas as rotas protegidas requerem o header:

```
Authorization: Bearer <session_token>
```

O token é obtido do cookie `better-auth.session_token`.

## Formato

- **Request**: JSON (`Content-Type: application/json`)
- **Response**: JSON
- **Erros**: `{ "error": "mensagem" }` com status HTTP apropriado

## Endpoints

### Configuração

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/config` | Configuração do app (modelo Whisper) |

### Vídeo

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/meta` | Buscar metadados de URL |
| POST | `/upload` | Upload de arquivo de vídeo |

### Projetos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/projects` | Listar projetos |
| GET | `/projects/:id` | Detalhe do projeto |
| POST | `/projects` | Criar projeto |
| DELETE | `/projects/:id` | Excluir projeto |
| POST | `/projects/:id/cancel` | Cancelar processamento |
| GET | `/projects/:id/status` | SSE de status |

### Templates

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/caption-templates` | Listar templates |
| GET | `/caption-templates/:id` | Buscar template |
| POST | `/caption-templates` | Criar template |
| PUT | `/caption-templates/:id` | Atualizar template |
| DELETE | `/caption-templates/:id` | Excluir template |

### Clipes

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/clips/:clipId/schedule` | Agendar clipe |
| GET | `/clips/scheduled` | Listar agendamentos |

### Integrações

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/integrations` | Listar integrações |
| DELETE | `/integrations/:id` | Remover integração |

### Créditos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/credits` | Saldo e plano |
| POST | `/credits/select-plan` | Selecionar plano |

### Auth

| Método | Endpoint | Descrição |
|---|---|---|
| PUT | `/auth/profile` | Atualizar perfil |
| PUT | `/auth/avatar` | Upload avatar |
| DELETE | `/auth/avatar` | Remover avatar |

### Notificações

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/notifications` | Listar notificações |
| POST | `/notifications/read` | Marcar todas como lidas |
| POST | `/notifications/:id/read` | Marcar como lida |

### Stripe

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/stripe/checkout` | Criar sessão de checkout |
| POST | `/stripe/customer-portal` | Portal do cliente |
