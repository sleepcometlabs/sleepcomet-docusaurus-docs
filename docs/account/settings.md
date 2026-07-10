---
title: Configurações
description: Gerenciamento de perfil, segurança, plano e sessão na plataforma SleepComet.
---

# Configurações da conta

A página **Configurações** (`/settings`) centraliza o gerenciamento do seu perfil, da segurança e do plano contratado.

## Perfil

| Ação | Descrição |
|---|---|
| **Nome de exibição** | Altere o nome mostrado na plataforma e nas notificações. |
| **Avatar** | Envie uma imagem de perfil ou remova a atual. |

## Segurança

- **Alterar senha** — requer a senha atual e a nova senha. Ao confirmar, as demais sessões ativas são encerradas por segurança.

Para detalhes sobre métodos de login e sessões, consulte [Autenticação](/account/auth).

## Plano e créditos

A seção **Plano atual** exibe:

- O plano contratado e o ciclo de faturamento;
- O saldo de créditos disponível no ciclo — consulte [Créditos](/account/credits);
- O botão **Fazer upgrade**, que abre o checkout do Stripe.

### Fluxo de upgrade

1. Clique em **Fazer upgrade** e selecione o plano desejado;
2. Complete o pagamento no ambiente seguro do Stripe;
3. Ao retornar ao aplicativo, o novo plano e os créditos correspondentes já estão ativos.

O redirecionamento para `/checkout` e o retorno com status de sucesso ou cancelamento são tratados automaticamente pela plataforma. A gestão da assinatura (método de pagamento, faturas, cancelamento) é feita pelo [portal do cliente Stripe](/api/credits#portal-do-cliente).

## Sessão

- **Sair** — encerra a sessão atual no dispositivo em uso.

---

**Próximos passos:** [Planos e preços](/account/pricing) · [Créditos](/account/credits)
