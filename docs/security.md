---
title: Segurança e Privacidade
description: Como o SleepComet protege sessões, tokens de integração, mídia e dados de pagamento.
---

# Segurança e privacidade

Esta página descreve as práticas de segurança da plataforma que são relevantes para o usuário. Para os termos legais completos, consulte a [Política de Privacidade](https://sleepcomet.com/privacidade) e os [Termos de Uso](https://sleepcomet.com/termos).

## Sessões e autenticação

- A autenticação usa **session tokens em cookies HTTP-only** (Better Auth), inacessíveis a scripts no navegador;
- O login via Google usa **OAuth 2.0** — a plataforma nunca tem acesso à sua senha do Google;
- A alteração de senha **encerra as demais sessões ativas** da conta;
- Sessões de serviços distintos do SleepComet são independentes entre si.

## Tokens de redes sociais

As integrações com TikTok, Instagram e YouTube utilizam OAuth:

- Os tokens de acesso e de renovação são armazenados no servidor e **nunca são expostos pela API** — a listagem de integrações retorna apenas o provedor e o nome da conta;
- A autorização pode ser revogada a qualquer momento removendo a integração na plataforma ou nas configurações da própria rede social;
- A plataforma solicita apenas os escopos necessários para publicar conteúdo em seu nome.

## Regras de plano aplicadas no servidor

Limites e regras comerciais são validados **no servidor, no momento de criar o job de processamento** — nunca apenas na interface:

- O saldo de créditos é verificado antes de qualquer processamento;
- Todo campo numérico ou de enumeração de um template é ajustado para a faixa válida (consulte [Limites e cotas](/limits#parâmetros-de-template));
- No plano Free, a marca d'água é reimposta no servidor mesmo que a requisição tente desativá-la.

Isso garante que requisições manipuladas diretamente na API não contornem as regras do plano.

## Mídia e armazenamento

- Vídeos e clipes são armazenados no **Cloudflare R2**;
- O acesso à mídia é feito por URLs de CDN próprias da plataforma;
- Ao excluir um projeto, seus clipes deixam de ser listados na plataforma.

## Pagamentos

- Todo o fluxo de pagamento é processado pelo **Stripe** (checkout e portal do cliente);
- A plataforma **não armazena dados de cartão** — apenas o status da assinatura e o plano ativo;
- Faturas, alteração de método de pagamento e cancelamento são gerenciados no portal do cliente Stripe.

## Boas práticas para a sua conta

- Use uma senha única e um gerenciador de senhas;
- Prefira o login com Google se sua conta Google tiver verificação em duas etapas;
- Revise periodicamente as integrações conectadas em `/integrations`;
- Ao publicar via API, trate o session token como um segredo: não o exponha em código-fonte nem em logs.

---

**Próximos passos:** [Autenticação](/account/auth) · [API de autenticação](/api/auth)
