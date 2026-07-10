---
title: Upload de Arquivo
description: Envie vídeos diretamente do seu computador, com limites por plano e upload multipart para o Cloudflare R2.
---

# Upload de arquivo

Além de processar links, a plataforma aceita arquivos de vídeo enviados diretamente do seu computador — útil para material inédito, gravações locais e vídeos que não estão públicos em nenhuma plataforma.

## Como enviar

1. Na página inicial, clique no **ícone de upload** ao lado do campo de URL;
2. Selecione o arquivo de vídeo;
3. Configure o processamento normalmente (intervalo, duração dos clipes, template);
4. Clique em **Processar**.

## Formatos suportados

| Formato | Observação |
|---|---|
| **MP4** | Recomendado — melhor compatibilidade e velocidade |
| MOV | Suportado |
| AVI | Suportado |
| MKV | Suportado |
| WebM | Suportado |

## Limites por plano

| Plano | Tamanho máximo por arquivo |
|---|---|
| Free | 500 MB |
| Creator | 2 GB |
| Pro | 5 GB |
| Enterprise | 10 GB |

O arquivo enviado também conta para a cota de [armazenamento](/limits#armazenamento) do plano.

## Fluxo técnico

1. O arquivo é enviado por **upload multipart** para o Cloudflare R2;
2. A API gera uma URL assinada de acesso temporário;
3. O job é criado com a chave do arquivo (`uploadedFileKey`);
4. O worker baixa o arquivo do R2 e executa a [pipeline padrão](/features/pipeline) — as etapas de análise e download de URL são substituídas pela leitura direta do arquivo.

:::tip Conexões instáveis
Em redes instáveis, prefira arquivos menores ou comprima o vídeo antes do envio. Um MP4 (H.264) com bitrate moderado preserva qualidade suficiente para a clipagem.
:::

---

**Próximos passos:** [Processamento por URL](/features/url-processing) · [Limites e cotas](/limits)
