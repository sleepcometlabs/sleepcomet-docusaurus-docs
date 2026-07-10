---
title: Autenticação
description: Métodos de login, gerenciamento de sessão e proteção de rotas na plataforma SleepComet.
---

# Autenticação

O SleepComet oferece dois métodos de autenticação, ambos gerenciados pelo Better Auth.

## Métodos de acesso

| Método | Descrição |
|---|---|
| **E-mail e senha** | Cadastro tradicional com credenciais próprias. |
| **Google OAuth** | Acesso com um clique usando sua conta Google. |

## Registro

Acesse [app.sleepcomet.com/register](https://app.sleepcomet.com) para criar a conta. Ao concluir o cadastro, o plano **Free** é ativado automaticamente com 30 créditos mensais — nenhum dado de pagamento é solicitado.

## Sessão

A autenticação utiliza **session tokens em cookies HTTP-only**, o que impede o acesso ao token por scripts no navegador. A sessão é renovada automaticamente entre visitas; não é necessário refazer login a cada acesso.

:::note Sessões independentes
A sessão do aplicativo (`better-auth.*`) é independente de qualquer outra sessão de serviços SleepComet. Encerrar uma não afeta a outra.
:::

## Proteção de rotas

Todas as rotas do aplicativo exigem autenticação. Usuários não autenticados são redirecionados automaticamente para `/login`, preservando a rota de destino para redirecionamento após o acesso.

## Alteração de senha

Em **Configurações → Segurança**, informe a senha atual e a nova senha. Por segurança, a alteração encerra as demais sessões ativas da conta.

## Autenticação na API

Chamadas diretas à API REST utilizam o mesmo session token da plataforma:

```
Authorization: Bearer <session_token>
```

O token pode ser obtido do cookie `better-auth.session_token`. Consulte [API de autenticação](/api/auth) para os detalhes e endpoints de perfil.

---

**Próximos passos:** [Configurações da conta](/account/settings) · [Segurança e privacidade](/security)
