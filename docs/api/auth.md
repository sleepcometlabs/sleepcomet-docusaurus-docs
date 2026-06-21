---
title: Autenticação
---

# API de Autenticação

## Headers

Todas as rotas protegidas utilizam:

```
Authorization: Bearer <session_token>
```

O token é um session token do Better Auth, armazenado no cookie `better-auth.session_token`.

## Atualizar Perfil

```
PUT /auth/profile
```

**Body:**

```json
{
  "name": "Novo Nome"
}
```

**Response:** `{ "status": "ok" }`

## Upload Avatar

```
PUT /auth/avatar
```

**Body:** `multipart/form-data` com campo `file`.

**Response:**

```json
{
  "status": "ok",
  "avatarUrl": "https://..."
}
```

## Remover Avatar

```
DELETE /auth/avatar
```

**Response:** `{ "status": "ok" }`

## Alterar Senha

A alteração de senha é feita via Better Auth SDK no frontend:

```typescript
const { authClient } = await import("./auth-client")
const res = await authClient.changePassword({
  newPassword,
  currentPassword,
  revokeOtherSessions: true,
})
```
