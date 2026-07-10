---
title: Integrações
description: Conecte contas do TikTok, Instagram e YouTube via OAuth para publicar clipes diretamente da plataforma.
---

# Integrações com redes sociais

As integrações conectam suas contas de redes sociais à plataforma via OAuth, habilitando a publicação direta e o agendamento de clipes.

## Redes suportadas

| Plataforma | Publicação direta | Agendamento |
|---|---|---|
| TikTok | Disponível | Pro+ |
| Instagram | Disponível | Pro+ |
| YouTube | Disponível | Pro+ |

## Conectar uma conta

1. Acesse `/integrations` no menu lateral;
2. Clique na plataforma desejada;
3. Autorize o acesso na tela OAuth da própria rede;
4. A conta aparece na lista de integrações, pronta para uso.

A plataforma solicita apenas os escopos necessários para publicar conteúdo em seu nome. Os tokens de acesso ficam armazenados no servidor e [nunca são expostos pela API](/security#tokens-de-redes-sociais).

## Gerenciar integrações

- **Listar** — todas as contas conectadas, com provedor e nome da conta;
- **Remover** — desconecta a conta. Para voltar a publicar nela, será necessário reconectar.

## Limites por plano

| Plano | Contas conectadas |
|---|---|
| Free | 1 |
| Creator | 3 |
| Pro | 3 |
| Enterprise | Personalizado |

## Como funciona a publicação

1. O worker obtém o token de acesso da integração;
2. Envia o vídeo para a plataforma de destino;
3. Aplica título, descrição e hashtags configurados;
4. Registra o status final da publicação ([ciclo de vida](/features/scheduling#ciclo-de-vida-de-uma-publicação)).

:::note Tokens expirados
Se uma rede social revogar ou expirar o token, as publicações passam a falhar com status `failed`. Remova a integração e conecte novamente para renovar a autorização.
:::

---

**Próximos passos:** [Agendamento](/features/scheduling) · [API de integrações](/api/integrations)
