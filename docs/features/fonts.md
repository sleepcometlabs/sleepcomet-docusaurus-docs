---
title: Fontes
description: As 21 fontes integradas, o upload de fontes customizadas (Pro+) e como o worker resolve fontes na renderização.
---

# Sistema de fontes

A tipografia é o elemento mais visível de uma legenda. O SleepComet inclui **21 fontes integradas**, todas carregadas com `@font-face` real no editor — a prévia usa exatamente o mesmo arquivo de fonte que o renderizador.

## Fontes integradas

| Nome | Identificador interno |
|---|---|
| The Bold Font | `THEBOLDFONT` |
| TikTok Sans | `TikTokSans-Regular` |
| Anton | `Anton-Regular` |
| Archivo Black | `ArchivoBlack-Regular` |
| Bangers | `Bangers-Regular` |
| Barlow Condensed | `BarlowCondensed-Bold` |
| Bebas Neue | `BebasNeue-Regular` |
| DM Sans | `DMSans` |
| Inter | `Inter` |
| League Spartan | `LeagueSpartan` |
| Montserrat | `Montserrat-Variable-wght` |
| Nunito Sans | `NunitoSans` |
| Open Sans | `OpenSans` |
| Oswald | `Oswald-Variable-wght` |
| Poppins | `Poppins-ExtraBold` |
| Raleway | `Raleway-Variable-wght` |
| Roboto | `Roboto` |
| Rubik | `Rubik` |
| Sora | `Sora` |
| Urbanist | `Urbanist` |
| Work Sans | `WorkSans` |

:::note Seleção pelo seletor
Sempre escolha a fonte pelo seletor do editor. O identificador precisa corresponder exatamente a um arquivo de fonte real do renderizador — um nome digitado manualmente que não exista resulta em fallback silencioso para uma fonte genérica no vídeo final.
:::

## Fontes customizadas (Pro e Enterprise)

Usuários dos planos Pro e Enterprise podem enviar as próprias fontes nos formatos `.ttf` e `.otf`:

| Plano | Limite |
|---|---|
| Free / Creator | — (apenas as integradas) |
| Pro | 10 fontes |
| Enterprise | Ilimitadas |

## Como o worker resolve fontes

Na renderização, a fonte é localizada nesta ordem:

1. **Busca exata** no diretório de fontes do usuário (`user_fonts/<user_id>/`);
2. **Busca exata** no diretório de fontes do sistema;
3. **Busca normalizada** — nome sem espaços e símbolos;
4. **Busca ampla (glob)** no diretório do usuário.

Para fontes customizadas, o worker extrai o nome da família diretamente do arquivo TTF/OTF e o utiliza no campo `Fontname` do ASS. Se nenhuma fonte for encontrada, o fallback é `Arial`.

```python
font_name = get_font_family_name(font_path) or font_path.stem
```

---

**Próximos passos:** [Templates de legendas](/features/caption-templates) · [Solução de problemas — fontes](/troubleshooting#a-legenda-aparece-com-uma-fonte-diferente-da-escolhida)
