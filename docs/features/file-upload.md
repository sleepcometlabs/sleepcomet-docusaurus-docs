---
title: Upload de Arquivo
---

# Upload de Arquivo

Faça upload de vídeos diretamente do seu computador.

## Como fazer upload

1. Clique no ícone de upload ao lado do campo de URL
2. Selecione o arquivo de vídeo
3. Configure as opções de processamento
4. Clique em Processar

## Formatos Suportados

- MP4 (recomendado)
- MOV
- AVI
- MKV
- WebM

## Limitações

| Plano | Limite de Upload |
|---|---|
| Free | 500 MB |
| Creator | 2 GB |
| Pro | 5 GB |
| Enterprise | 10 GB |

## Fluxo Técnico

1. Arquivo é enviado para Cloudflare R2 via upload multipart
2. URL assinada é gerada para acesso temporário
3. Job é criado com a chave do arquivo
4. Worker baixa o arquivo do R2 e processa normalmente
