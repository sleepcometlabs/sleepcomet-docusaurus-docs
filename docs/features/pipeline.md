---
title: Pipeline de Processamento
description: As oito etapas que transformam um vídeo longo em clipes renderizados, e como acompanhar cada uma em tempo real.
---

# Pipeline de processamento

Todo projeto percorre uma pipeline de **oito etapas sequenciais**, executadas pelo worker de processamento. O progresso de cada etapa é transmitido em tempo real para a página do projeto.

## Etapas

### 1. Análise da URL

- Busca de metadados via yt-dlp: título, duração, thumbnail;
- Detecção do idioma do áudio.

### 2. Download do vídeo

- Download na melhor qualidade disponível;
- Armazenamento temporário no worker durante o processamento.

### 3. Corte do intervalo

- Aplicação do trim inicial e final configurado no projeto;
- Preservação integral da qualidade do áudio.

### 4. Extração de áudio

- Conversão para WAV 16 kHz mono, o formato ideal para o Whisper;
- Separação de vocais com Demucs, quando habilitada — melhora a transcrição em áudios com música de fundo.

### 5. Transcrição rápida

- Transcrição com Whisper;
- Segmentos com timestamps e **timing individual por palavra** — a base da sincronização das animações de legenda.

### 6. Geração de cortes inteligentes

- A IA analisa a transcrição e identifica os trechos com maior potencial;
- Cada corte recebe um [score de viralidade](/features/scoring) de 0 a 100;
- A duração respeita o preset escolhido (automático, 15–30s, 30–60s, 60–90s).

### 7. Legendas e enriquecimento

- Geração do arquivo de legenda ASS para cada clipe, com o [template](/features/caption-templates) aplicado;
- Sobreposição da marca d'água conforme as regras do plano.

### 8. Renderização final

- Burn-in das legendas e renderização com FFmpeg (H.264);
- Upload dos clipes para o Cloudflare R2;
- Notificação de conclusão via [SSE](/api/sse-status).

## Acompanhamento em tempo real

Na página do projeto, você acompanha:

- **Barra de progresso por etapa**, com a etapa ativa destacada;
- **Mensagens ao vivo** do processamento (ex.: "Gerando legendas para o clipe 3/8...");
- **Estatísticas técnicas** — modelo Whisper, dispositivo e modo de computação.

Você pode fechar a página a qualquer momento: o processamento continua no servidor.

## Cancelamento

O processamento pode ser cancelado a qualquer momento pela página do projeto. O projeto é removido e **nenhum crédito é cobrado**.

---

**Próximos passos:** [Sistema de scoring](/features/scoring) · [Pipeline do worker (interno)](/api/worker-pipeline)
