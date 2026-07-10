---
title: API Reference
slug: /api/
description: Visão geral da API REST do SleepComet — base URL, autenticação, convenções e índice completo de endpoints.
---

# Referência da API

A API REST do SleepComet expõe todos os recursos da plataforma: projetos, clipes, templates, integrações, agendamento e créditos. Este índice apresenta as convenções gerais e o mapa completo de endpoints.

## Base URL

```
https://api.sleepcomet.com/api
```

## Autenticação

Todas as rotas protegidas exigem o header:

```
Authorization: Bearer <session_token>
```

O token é o session token do Better Auth, disponível no cookie `better-auth.session_token`. Detalhes em [Autenticação](/api/auth).

## Convenções

- **Requisições:** JSON (`Content-Type: application/json`), exceto uploads (`multipart/form-data`);
- **Respostas:** JSON;
- **Erros:** `{ "error": "mensagem" }` com o status HTTP apropriado — consulte [Erros e convenções](/api/errors);
- **Paginação:** parâmetros `page` e `limit` nas listagens, com `total` na resposta.

## Mapa de endpoints

### Vídeo

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/meta` | [Buscar metadados de uma URL](/api/videos#buscar-metadados) |
| POST | `/upload` | [Upload de arquivo de vídeo](/api/videos#upload-de-arquivo) |

### Projetos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/projects` | [Listar projetos](/api/projects#listar-projetos) |
| GET | `/projects/:id` | [Detalhe do projeto](/api/projects#detalhe-do-projeto) |
| POST | `/projects` | [Criar projeto](/api/projects#criar-projeto) |
| DELETE | `/projects/:id` | [Excluir projeto](/api/projects#excluir-projeto) |
| POST | `/projects/:id/cancel` | [Cancelar processamento](/api/projects#cancelar-processamento) |
| GET | `/projects/:id/status` | [Status em tempo real (SSE)](/api/sse-status) |

### Templates de legenda

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/caption-templates` | [Listar templates](/api/caption-templates#listar-templates) |
| GET | `/caption-templates/:id` | Buscar template |
| POST | `/caption-templates` | [Criar template](/api/caption-templates#criar-template) |
| PUT | `/caption-templates/:id` | [Atualizar template](/api/caption-templates#atualizar-template) |
| DELETE | `/caption-templates/:id` | [Excluir template](/api/caption-templates#excluir-template) |

### Clipes e agendamento

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/clips/:clipId/schedule` | [Agendar clipe](/api/clips#agendar-clipe) |
| GET | `/clips/scheduled` | [Listar agendamentos](/api/clips#listar-agendamentos) |
| POST | `/projects/:id/bulk-schedule` | [Agendar em lote](/api/clips#agendar-em-lote) |

### Integrações

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/integrations` | [Listar integrações](/api/integrations#listar-integrações) |
| DELETE | `/integrations/:id` | [Remover integração](/api/integrations#remover-integração) |

### Créditos e assinatura

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/credits` | [Saldo e plano](/api/credits#consultar-saldo) |
| POST | `/credits/select-plan` | [Selecionar plano](/api/credits#selecionar-plano) |
| POST | `/stripe/checkout` | [Checkout Stripe](/api/credits#checkout-stripe) |
| POST | `/stripe/customer-portal` | [Portal do cliente](/api/credits#portal-do-cliente) |

### Conta

| Método | Endpoint | Descrição |
|---|---|---|
| PUT | `/auth/profile` | [Atualizar perfil](/api/auth#atualizar-perfil) |
| PUT | `/auth/avatar` | [Enviar avatar](/api/auth#enviar-avatar) |
| DELETE | `/auth/avatar` | [Remover avatar](/api/auth#remover-avatar) |

### Notificações

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/notifications` | [Listar notificações](/api/notifications#listar-notificações) |
| POST | `/notifications/read` | [Marcar todas como lidas](/api/notifications#marcar-todas-como-lidas) |
| POST | `/notifications/:id/read` | [Marcar como lida](/api/notifications#marcar-uma-notificação-como-lida) |

### Configuração

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/config` | Configuração pública do app (ex.: modelo Whisper ativo) |

---

**Comece por:** [Autenticação](/api/auth) · [Erros e convenções](/api/errors) · [Criar um projeto](/api/projects#criar-projeto)
