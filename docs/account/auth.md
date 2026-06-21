---
title: Autenticação
---

# Autenticação

O Sleepcomet suporta autenticação por email/senha e Google OAuth.

## Login

Acesse `/login` para fazer login com:

- **Email + senha**: Credenciais cadastradas
- **Google OAuth**: Conta Google vinculada

## Registro

Acesse `/register` para criar uma nova conta. Após o registro, você receberá acesso ao plano Free com 30 créditos.

## Sessão

A autenticação utiliza Better Auth com session tokens via cookies HTTP-only. A sessão é mantida automaticamente entre visitas.

## Proteção de Rotas

Todas as rotas da plataforma são protegidas. Usuários não autenticados são redirecionados para `/login`.

## API Authentication

Para chamadas à API, envie o header:

```
Authorization: Bearer <session_token>
```

O token pode ser obtido do cookie `better-auth.session_token` no navegador.
