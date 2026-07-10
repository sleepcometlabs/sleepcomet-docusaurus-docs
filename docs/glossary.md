---
title: Glossário
description: Definição de todos os termos utilizados na plataforma e nesta documentação.
---

# Glossário

Termos utilizados na plataforma e ao longo desta documentação, em ordem alfabética.

### Animação de entrada

Família de animações de legenda em que o trecho inteiro entra na tela com uma transformação (`fade`, `smooth`, `scale`). Contrasta com as animações **por palavra**. Veja [Animações](/features/animations).

### Animação por palavra

Família de animações em que o efeito acontece na palavra falada, sincronizada ao timestamp real da transcrição (`karaoke`, `word`, `highlight`, `pop`, `bounce`). Veja [Animações](/features/animations).

### ASS (Advanced SubStation Alpha)

Formato de legenda usado pelo renderizador. Suporta estilos, posicionamento e animações, e é "queimado" no vídeo final pelo FFmpeg. Detalhes em [Sistema de legendas](/api/worker-subtitles).

### Burn-in

Processo de gravar a legenda diretamente nos quadros do vídeo, tornando-a parte da imagem — em oposição a legendas em arquivo separado.

### Clipe

Corte curto gerado pela IA a partir de um projeto, com legenda, score e mídia próprios. Veja [Clipes](/features/clips).

### Crédito

Unidade de consumo da plataforma: 1 crédito = 1 minuto de vídeo processado. Veja [Créditos](/account/credits).

### Fila (queue)

Mecanismo (Redis) que desacopla a API do worker. Projetos aguardam na fila do seu plano até serem consumidos por um worker disponível.

### Integração

Conta de rede social (TikTok, Instagram ou YouTube) conectada via OAuth para publicação direta. Veja [Integrações](/features/integrations).

### Job

Mensagem publicada na fila com todas as instruções de um processamento (URL ou arquivo, intervalo, preset de duração, template).

### Pipeline

Sequência de oito etapas que processa o vídeo: análise, download, corte, extração de áudio, transcrição, geração de cortes, enriquecimento e publicação. Veja [Pipeline de processamento](/features/pipeline).

### Preset de duração

Configuração que orienta a duração dos clipes gerados: automático, 15–30s, 30–60s ou 60–90s.

### Projeto

Um vídeo enviado para processamento, com suas configurações, status e clipes resultantes.

### Reenquadramento (reframe)

Conversão do vídeo original (geralmente 16:9) para o formato vertical 9:16, com detecção de rosto (OpenCV) para manter o assunto no quadro.

### Score de viralidade

Pontuação de 0 a 100 atribuída pela IA a cada clipe, com base em densidade de informação, ritmo, emoção, completude narrativa e potencial de compartilhamento. Veja [Sistema de scoring](/features/scoring).

### SSE (Server-Sent Events)

Tecnologia usada para transmitir o progresso do processamento em tempo real ao navegador. Veja [SSE Status](/api/sse-status).

### Template de legenda

Conjunto de propriedades visuais (tipografia, cores, animação, posição, marca d'água) aplicado às legendas de um projeto. Veja [Templates de legendas](/features/caption-templates).

### Transcrição

Conversão do áudio em texto com timestamps por palavra, feita pelo modelo Whisper.

### Watermark (marca d'água)

Logotipo sobreposto ao vídeo renderizado. Obrigatória no plano Free; configurável (posição, opacidade, tamanho) nos demais planos.

### Whisper

Modelo de reconhecimento de fala da OpenAI usado para transcrever o áudio dos vídeos.

### Worker

Serviço em Python responsável pelo processamento de mídia: download, transcrição, seleção de momentos, legendas e renderização. Veja [Pipeline do worker](/api/worker-pipeline).

---

**Voltar para:** [Visão geral](/intro) · [Perguntas frequentes](/faq)
