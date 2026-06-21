---
title: Pipeline de Processamento
---

# Pipeline de Processamento

A pipeline do Sleepcomet processa vídeos em 8 etapas sequenciais.

## Etapas

### 1. Analisar URL
- Busca metadados via yt-dlp
- Extrai título, duração, thumbnail
- Detecta idioma do áudio

### 2. Baixar Vídeo
- Download na melhor qualidade disponível
- Suporta múltiplas resoluções
- Armazenamento temporário no worker

### 3. Cortar Intervalo
- Aplica trim inicial e final conforme configurado
- Remove silêncios excessivos
- Preserva qualidade do áudio

### 4. Extrair Áudio
- Conversão para WAV 16kHz mono
- Otimizado para transcrição Whisper
- Separação de vocais (Demucs, opcional)

### 5. Transcrição Rápida
- Whisper com modelo leve (small)
- Geração de segmentos com timestamps
- Palavras individuais com timing

### 6. Gerar Cortes Inteligentes
- IA analisa os melhores momentos
- Seleciona trechos com alto potencial viral
- Calcula score de viralidade (0-100)

### 7. Transcrever e Legendar
- Geração de legendas ASS para cada clipe
- Aplicação de estilos (fonte, cor, animação)
- Overlay de marca d'água

### 8. Finalizar
- Renderização com FFmpeg
- Upload para Cloudflare R2
- Notificação de conclusão via SSE

## Monitoramento

Acompanhe o progresso em tempo real na página do projeto:

- Barra de progresso por etapa
- Logs ao vivo do processamento
- Tempo estimado restante
- Estatísticas (modelo Whisper, device, compute)

## Cancelamento

Você pode cancelar o processamento a qualquer momento. O projeto será removido e os créditos não serão cobrados.
