---
title: Integrações
---

# Integrações com Redes Sociais

Conecte suas contas para publicar clipes diretamente.

## Plataformas Suportadas

| Plataforma | Status |
|---|---|
| TikTok | Disponível |
| Instagram | Disponível |
| YouTube | Disponível |

## Conectar Conta

1. Acesse `/integrations`
2. Clique na plataforma desejada
3. Autorize o acesso via OAuth
4. A conta aparece na lista de integrações

## Gerenciar Integrações

- **Listar**: Veja todas as contas conectadas
- **Remover**: Delete uma integração (requer reconexão)

## Limites por Plano

| Plano | Integrações |
|---|---|
| Free | 1 |
| Creator | 3 |
| Pro | 3 |
| Enterprise | Personalizado |

## Publicação

Ao publicar um clipe:

1. O worker obtém o token de acesso da integração
2. Faz upload do vídeo para a plataforma
3. Adiciona título, descrição e hashtags
4. Retorna o status da publicação
