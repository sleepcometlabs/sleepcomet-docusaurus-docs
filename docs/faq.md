---
title: Perguntas Frequentes
description: Respostas diretas para as dúvidas mais comuns sobre o SleepComet — créditos, processamento, legendas e publicação.
---

# Perguntas frequentes

## Conta e créditos

### O plano Free exige cartão de crédito?

Não. O plano Free é ativado automaticamente no cadastro, inclui 30 créditos mensais e não solicita nenhum dado de pagamento.

### O que consome créditos?

Apenas o processamento de vídeo: 1 crédito por minuto de vídeo processado. Criar templates, agendar publicações, baixar clipes já renderizados e navegar pela plataforma não consomem créditos. Veja [Créditos](/account/credits).

### Créditos não utilizados acumulam para o mês seguinte?

Não. O saldo é renovado no início de cada ciclo de faturamento.

### Cancelei um processamento no meio. Fui cobrado?

Não. Projetos cancelados antes da conclusão são removidos e nenhum crédito é debitado.

## Processamento

### Quais plataformas de vídeo são suportadas?

YouTube (vídeos comuns e Shorts) e Vimeo (vídeos públicos). Também é possível [enviar arquivos diretamente](/features/file-upload) em MP4, MOV, AVI, MKV e WebM.

### Por que meu vídeo privado não processa?

Vídeos privados, não listados com restrição ou com restrição de idade não podem ser acessados pela plataforma. Torne o vídeo público ou envie o arquivo por upload.

### Quanto tempo demora um processamento?

Depende da duração do vídeo, do intervalo selecionado e da fila do seu plano. Planos pagos usam fila prioritária ou GPU dedicada. Vídeos acima de 2 horas podem levar consideravelmente mais tempo — recomendamos usar o [seletor de intervalo](/features/url-processing#intervalo-de-tempo).

### Posso fechar o navegador durante o processamento?

Sim. Todo o processamento acontece nos servidores da plataforma. Ao retornar, o projeto estará atualizado — e você recebe uma notificação na conclusão.

### Em que idiomas a transcrição funciona?

O Whisper detecta o idioma automaticamente e suporta dezenas de idiomas, incluindo português, inglês e espanhol. Para vídeos com sotaques fortes ou vocabulário técnico, especificar o idioma manualmente melhora a precisão.

## Clipes e legendas

### Como a IA escolhe os trechos?

O modelo analisa densidade de informação, ritmo de fala, presença de emoção, completude narrativa e potencial de compartilhamento, e atribui um [score de viralidade](/features/scoring) de 0 a 100 a cada clipe.

### A prévia da legenda é fiel ao vídeo final?

Sim. O editor de templates usa as mesmas fontes, a mesma escala e as mesmas animações do renderizador — o que você vê na prévia é o que será queimado no vídeo.

### Posso usar minha própria fonte?

Nos planos **Pro** (até 10 fontes) e **Enterprise** (ilimitadas), com upload de arquivos `.ttf` e `.otf`. Os demais planos usam as [21 fontes integradas](/features/fonts).

### Posso baixar apenas a legenda, sem o vídeo?

Sim. Todo clipe disponibiliza o arquivo `.ass` da legenda. Nos planos Pro e Enterprise também é possível exportar em SRT e VTT.

### Como removo a marca d'água?

A marca d'água é removível a partir do plano **Creator**. No plano Free ela é obrigatória e a regra é aplicada no servidor — alterar o template não a remove.

## Publicação

### Em quais redes posso publicar?

TikTok, Instagram e YouTube, via [integrações OAuth](/features/integrations). O número de contas conectadas varia por plano.

### O agendamento está disponível em todos os planos?

O agendamento de publicações está disponível nos planos **Pro** e **Enterprise**. Os demais planos publicam manualmente após o download.

### Uma publicação agendada falhou. E agora?

O status `failed` aparece no [calendário](/features/calendar) com a mensagem de erro. As causas mais comuns são token de integração expirado (reconecte a conta) e limites da própria rede social. Veja [Solução de problemas](/troubleshooting).

---

Não encontrou sua resposta? Consulte [Solução de problemas](/troubleshooting) ou entre em contato pelo canal de suporte do seu plano.
