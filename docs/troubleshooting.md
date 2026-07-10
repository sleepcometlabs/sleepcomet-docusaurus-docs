---
title: Solução de Problemas
description: Diagnóstico e correção dos erros mais comuns de processamento, legendas, integração e publicação.
---

# Solução de problemas

Este guia reúne os problemas mais comuns e as ações recomendadas para cada um. Se o problema persistir após seguir as orientações, acione o canal de suporte do seu plano com o **ID do projeto** em mãos.

## Processamento

### O projeto falhou na etapa "Análise da URL"

**Causas prováveis:**

- O vídeo é privado, não listado com restrição ou tem restrição de idade;
- O link está incorreto ou o vídeo foi removido;
- A plataforma de origem não é suportada (apenas YouTube e Vimeo).

**Ação:** verifique se o vídeo abre em uma janela anônima do navegador. Se abrir e o erro persistir, envie o arquivo por [upload direto](/features/file-upload).

### O projeto ficou parado em "Aguardando"

O projeto está na fila do seu plano. No plano Free a fila é compartilhada e pode haver espera em horários de pico. Planos pagos usam fila prioritária (Creator) ou GPU dedicada (Pro/Enterprise).

**Ação:** aguarde — o processamento inicia automaticamente. Não é necessário reenviar o projeto; reenviar cria um projeto duplicado e consome créditos adicionais quando concluído.

### Erro de créditos insuficientes

A duração do trecho selecionado excede seu saldo atual.

**Ação:** reduza o [intervalo de processamento](/features/url-processing#intervalo-de-tempo), aguarde a renovação do ciclo ou [faça upgrade](/account/pricing). O saldo pode ser conferido em **Configurações → Plano atual**.

### O upload do arquivo falha

**Causas prováveis:**

- O arquivo excede o [limite do seu plano](/limits#upload-de-arquivos) (500 MB no Free até 10 GB no Enterprise);
- Formato não suportado — use MP4, MOV, AVI, MKV ou WebM;
- Conexão instável durante o envio multipart.

**Ação:** confirme formato e tamanho; em conexões instáveis, prefira arquivos menores ou comprima o vídeo antes do envio.

## Clipes e legendas

### A transcrição veio imprecisa

**Ações, em ordem de impacto:**

1. Especifique o idioma manualmente em vez de usar a detecção automática;
2. Verifique a qualidade do áudio de origem — ruído intenso e falas sobrepostas degradam o resultado;
3. Evite trechos dominados por música.

### A legenda aparece com uma fonte diferente da escolhida

Isso indica que o renderizador não encontrou a fonte e recorreu ao fallback (Arial).

**Ação:** selecione uma das [fontes integradas](/features/fonts) pelo seletor — não digite nomes manualmente. Se for uma fonte customizada (Pro+), confirme que o upload do arquivo `.ttf`/`.otf` foi concluído.

### A legenda ficou cortada ou sobre a interface do TikTok/Instagram

**Ação:** ajuste o `positionY` do template para a faixa de 70–80%. O worker limita a posição entre 5% e 90% da altura do vídeo, mas a zona segura visual de cada rede é responsabilidade do template. Veja [Boas práticas](/best-practices#templates-de-legenda).

### Poucos clipes foram gerados

A IA só corta trechos com narrativa completa e potencial de engajamento. Vídeos com pouca fala, longos silêncios ou conteúdo homogêneo geram menos cortes.

**Ação:** processe um intervalo mais rico em conteúdo falado, ou use o preset de duração **Automático** para dar mais liberdade à seleção.

## Integrações e publicação

### A publicação falhou com status `failed`

**Causas prováveis, na ordem:**

1. **Token expirado ou revogado** — remova a integração em `/integrations` e conecte novamente;
2. **Limite da rede social** — as plataformas impõem cotas diárias de publicação por conta;
3. **Restrição de conteúdo** da rede de destino.

A mensagem de erro específica fica registrada no evento do [calendário](/features/calendar).

### Não consigo conectar uma nova rede social

Verifique o [limite de integrações do seu plano](/limits#integrações) — 1 conta no Free, 3 no Creator e no Pro. Remova uma integração existente ou faça upgrade.

## Conta

### Não recebo o e-mail de redefinição de senha

Confira a caixa de spam e confirme que o e-mail digitado é o mesmo do cadastro. Contas criadas com **Google OAuth** não possuem senha própria — acesse com o botão do Google.

### Fiz upgrade mas o plano não mudou

O retorno do checkout do Stripe atualiza o plano imediatamente. Se o aplicativo ainda exibir o plano anterior, recarregue a página. Persistindo, verifique no [portal do cliente Stripe](/api/credits#portal-do-cliente) se o pagamento foi concluído.

---

**Ainda com problemas?** Acione o suporte do seu plano — comunidade (Free), e-mail (Creator), WhatsApp (Pro) ou canal dedicado (Enterprise) — informando o ID do projeto e o horário aproximado do erro.
