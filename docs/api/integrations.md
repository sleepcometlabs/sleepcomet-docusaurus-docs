---
title: Integrações
---

# API de Integrações

## Listar Integrações

```
GET /integrations
```

**Response:**

```json
[
  {
    "id": "uuid",
    "provider": "tiktok",
    "accountName": "@usuario",
    "createdAt": "2025-01-15T10:00:00Z"
  }
]
```

:::note
`accessToken` e `refreshToken` não são retornados por segurança.
:::

## Remover Integração

```
DELETE /integrations/:id
```

**Response:** `{ "status": "ok" }`

## Fluxo de Conexão

1. Frontend redireciona para OAuth da plataforma
2. Usuário autoriza o acesso
3. Callback retorna tokens
4. API salva a integração no banco
5. Integração fica disponível para publicação
