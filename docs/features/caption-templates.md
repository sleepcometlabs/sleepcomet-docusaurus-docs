---
title: Templates de Legendas
---

# Templates de Legendas

Crie e gerencie estilos visuais personalizados para suas legendas.

## Acesso

Acesse `/caption-templates` no menu lateral ou clique em "Gerenciar modelos" no painel de configuração.

## Template Manager

O gerenciador permite:

- **Criar** novos templates do zero
- **Editar** templates existentes
- **Duplicar** templates como base
- **Excluir** templates personalizados
- **Definir como padrão** para novos projetos

## Propriedades do Template

### Tipografia

| Campo | Descrição | Valores |
|---|---|---|
| `fontFamily` | Fonte principal | Nomes de fontes do sistema ou custom |
| `fontStack` | CSS font-stack completo | `'Fonte', 'Arial', sans-serif` |
| `fontSize` | Tamanho da fonte | 16–90 (escalado proporcionalmente; preview usa `fontSize * 0.52`px, igual à escala real do ASS) |
| `fontColor` | Cor do texto | Hex (#FFFFFF) |

### Cores

| Campo | Descrição |
|---|---|
| `highlightColor` | Cor de destaque para palavras ativas (karaoke) |
| `strokeColor` | Cor da borda/contorno |
| `strokeWidth` | Espessura da borda (0–6; preview usa `strokeWidth * 0.7`px, igual à escala real do ASS) |
| `background` | Habilitar fundo caixa |
| `backgroundColor` | Cor do fundo (#RRGGBBAA) |
| `backgroundOpacity` | Opacidade do fundo (0–100%) |
| `wordSpacing` | Espaçamento entre palavras, `\fsp` no ASS (0–20px) |

### Animação

Duas famílias bem distintas — **cor** (todas as palavras do trecho aparecem juntas, só a cor
muda) e **movimento** (o trecho inteiro entra com uma transformação, sem highlight de cor):

| Tipo | Família | Descrição real (idêntica no preview e no vídeo renderizado) |
|---|---|---|
| `none` | — | Estático, cor única, sem movimento |
| `karaoke` | Cor | Destaque sequencial real, cronometrado com o timestamp de cada palavra |
| `word` | Cor | Todas as palavras visíveis ao mesmo tempo, cor alternada par/ímpar (estático, sem reveal) |
| `highlight` | Cor | Todas as palavras visíveis ao mesmo tempo, primeira metade na cor primária e segunda metade na cor de destaque (split estático) |
| `fade` | Movimento | Fade in/out, 350ms |
| `smooth` | Movimento | Fade in/out, 500ms (mesmo efeito do `fade`, só mais lento) |
| `pop` | Movimento | Escala 0.85→1.0 em 300ms ao aparecer |
| `scale` | Movimento | Escala 0.50→1.0 em 300ms ao aparecer (entrada maior que o `pop`) |
| `bounce` | Movimento | Escala 0.80→1.15→1.0 em 500ms (overshoot e assentamento) |

### Posicionamento

| Campo | Descrição |
|---|---|
| `positionY` | Posição vertical (10–90%, sempre clampada entre 5% e 90% da altura do vídeo pelo worker) |

### Marca d'Água

| Campo | Descrição |
|---|---|
| `watermarkEnabled` | Habilitar marca d'água — plano Free não pode desabilitar (reforçado no momento de criar o job, não só ao salvar o template) |
| `watermarkOpacity` | Opacidade, escala 0–100% |
| `watermarkPosition` | Posição: `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center` (`bottom-center` é um valor legado, ainda lido para templates antigos mas nunca mais gravado) |
| `watermarkSize` | Tamanho relativo ao padrão, 50–150% (100 = tamanho padrão atual) |

## Templates Built-in

| Template | Estilo |
|---|---|
| Default | Texto branco com contorno preto |
| Hormozi | Verde neon, bold, karaoke |
| MrBeast | Amarelo grande com vermelho |
| Minimal | Clean, fundo transparente |
| TikTok | Estilo TikTok, rosa |
| Neon | Efeito neon ciano/magenta |
| Podcast | Profissional, fundo escuro |
| Gaming | Verde neon, fundo escuro |
| Cinematic | Branco com scale reveal |
| Storytime | Bege quente, fundo arredondado |
| Smooth Talker | Branco suave com fade |
| High Energy | Laranja bold com bounce |

## Formato de Subtitle (ASS)

Os templates são convertidos para o formato ASS (Advanced SubStation Alpha):

```ass
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, ...
Style: Default,Inter,36,&H00FFFFFF,&H000000FF,&H00000000,...

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,{\pos(540,1440)}Texto da legenda
```

## JSON Custom Template

Templates customizados são enviados ao worker como JSON:

```json
{
  "name": "Meu Template",
  "fontFamily": "Inter",
  "fontSize": 32,
  "fontColor": "#FFFFFF",
  "highlightColor": "#FFD700",
  "strokeColor": "#000000",
  "strokeWidth": 2,
  "background": false,
  "backgroundColor": null,
  "animation": "karaoke",
  "positionY": 75,
  "watermarkEnabled": true,
  "watermarkOpacity": 50,
  "watermarkPosition": "bottom-right",
  "watermarkSize": 100
}
```

O worker converte camelCase para snake_case e mescla com o template `default` como base.
`positionY` e `watermarkOpacity` aceitam tanto fração (0–1) quanto percentual (>1, dividido por
100 automaticamente) — mas a API e os dois editores sempre enviam percentual.

Esse JSON pode chegar ao worker de duas formas: como `captionTemplate` de um template salvo
(resolvido e revalidado pela API no momento de criar o job, incluindo o plano atual do usuário)
ou embutido diretamente na requisição de criação de projeto. Nos dois casos a API agora clampa
todo campo numérico/enum antes de publicar o job — um valor fora do range ou um plano Free
tentando desabilitar a marca d'água é corrigido silenciosamente, não apenas confiado no valor
enviado pelo cliente.
