---
title: Configurações
---

# Configurações da Conta

Acesse `/settings` para gerenciar sua conta.

## Perfil

- **Nome**: Altere seu nome de exibição
- **Avatar**: Upload ou remoção de foto de perfil

## Segurança

- **Alterar senha**: Requer senha atual + nova senha

## Plataforma

- **Plano atual**: Visualize seu plano e créditos
- **Upgrade**: Acesse o Stripe Checkout para mudar de plano
- **Logout**: Encerre a sessão atual

## Checkout

O redirecionamento para `/checkout` é tratado automaticamente após:

- Selecionar um plano na página de preços
- Completar o pagamento no Stripe
- Retorno ao app com status de sucesso/cancelamento
