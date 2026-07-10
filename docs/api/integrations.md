---
title: Integrações
description: Endpoints de integrações com redes sociais — listagem, remoção e o fluxo de conexão OAuth.
---

# API de integrações

Gerencia as contas de redes sociais conectadas via OAuth. O guia de uso está em [Integrações](/features/integrations).

## Listar integrações

```
GET /integrations
```

**Resposta:**

```json
[
  {
    "id": "uuid",
    "provider": "tiktok",
    "accountName": "@usuario",
    "createdAt": "2026-07-09T10:00:00Z"
  }
]
```

:::note Tokens nunca são expostos
`accessToken` e `refreshToken` são armazenados apenas no servidor e nunca retornados pela API. Detalhes em [Segurança](/security#tokens-de-redes-sociais).
:::

## Remover integração

```
DELETE /integrations/:id
```

**Resposta:** `{ "status": "ok" }`

Após a remoção, publicações agendadas para essa conta passam a falhar — reagende-as após reconectar.

## Fluxo de conexão

A conexão de uma nova conta é iniciada pela interface (não por endpoint REST direto):

1. O frontend redireciona para a tela OAuth do provedor;
2. O usuário autoriza os escopos de publicação;
3. O callback retorna os tokens à API;
4. A API grava a integração em `social_accounts`;
5. A conta fica disponível para publicação e agendamento.

## Limites

O número de contas conectadas varia por plano — 1 (Free), 3 (Creator/Pro), personalizado (Enterprise). Ver [Limites e cotas](/limits#integrações).

---

**Próximos passos:** [Agendamento](/api/scheduling) · [Integrações (guia)](/features/integrations)
