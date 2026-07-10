---
title: Autenticação
description: Como autenticar chamadas à API com session tokens do Better Auth e gerenciar o perfil da conta.
---

# API de autenticação

## Header de autenticação

Todas as rotas protegidas exigem:

```
Authorization: Bearer <session_token>
```

O token é um **session token do Better Auth**, mantido no cookie HTTP-only `better-auth.session_token` durante o uso do aplicativo.

:::warning Trate o token como um segredo
O session token dá acesso completo à conta. Não o exponha em código-fonte, repositórios ou logs. Consulte [Segurança e privacidade](/security).
:::

## Atualizar perfil

```
PUT /auth/profile
```

**Body:**

```json
{
  "name": "Novo Nome"
}
```

**Resposta:** `{ "status": "ok" }`

## Enviar avatar

```
PUT /auth/avatar
```

**Body:** `multipart/form-data` com o campo `file` (imagem).

**Resposta:**

```json
{
  "status": "ok",
  "avatarUrl": "https://..."
}
```

## Remover avatar

```
DELETE /auth/avatar
```

**Resposta:** `{ "status": "ok" }`

## Alteração de senha

A alteração de senha não passa pela API REST — é feita pelo SDK do Better Auth no frontend:

```typescript
const { authClient } = await import("./auth-client");
const res = await authClient.changePassword({
  newPassword,
  currentPassword,
  revokeOtherSessions: true,
});
```

Com `revokeOtherSessions: true`, as demais sessões ativas são encerradas — o comportamento padrão da plataforma.

---

**Próximos passos:** [Erros e convenções](/api/errors) · [Autenticação na plataforma](/account/auth)
