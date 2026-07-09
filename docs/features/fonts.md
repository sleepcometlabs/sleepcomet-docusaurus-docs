---
title: Fontes
---

# Sistema de Fontes

O Sleepcomet resolve fontes de forma inteligente para garantir compatibilidade.

## Diretórios de Fontes

| Diretório | Descrição |
|---|---|
| `worker/app/fonts/` | Fontes do sistema (built-in) — fonte única de verdade para o seletor de fontes do admin e do app |
| `worker/app/user_fonts/<user_id>/` | Fontes enviadas pelo usuário (Pro+) |

O `value` de cada fonte no seletor do admin/app é sempre o **stem exato do arquivo** em
`worker/app/fonts/` (ex.: `Montserrat-Variable-wght`, não `Montserrat`) — precisa bater 1:1 com o
nome que o worker usa para resolver `Fontname` no ASS. Um valor que não bate com nenhum arquivo
real faz o libass cair silenciosamente num fallback feio no vídeo final.

## Resolução de Fonte

O worker resolve fontes nesta ordem:

1. **Busca exata**: `{fonte}.{ext}` no diretório do usuário
2. **Busca exata**: `{fonte}.{ext}` no diretório do sistema
3. **Normalização**: Nome normalizado (remove espaços, símbolos)
4. **Glob**: Busca ampla no diretório do usuário

## Fontes Built-in

21 fontes, todas com `@font-face` real carregada no admin e no app (self-hosted a partir dos
mesmos arquivos do worker) para que o preview seja fiel ao vídeo renderizado:

| Label | `value` (= arquivo) |
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

`Outfit` e `Arial Black` apareciam antes no seletor mas nunca existiram em `worker/app/fonts/` —
removidas (eram um fallback silencioso para uma fonte genérica tanto no preview quanto no vídeo
final).

## Fontes Customizadas (Pro+)

Usuários dos planos Pro e Enterprise podem fazer upload de fontes `.ttf` e `.otf`.

### Limites

| Plano | Limite de Fontes |
|---|---|
| Free/Creator | 0 (apenas built-in) |
| Pro | 10 fontes |
| Enterprise | Ilimitado |

## Conversão para ASS

O worker extrai o nome da família do arquivo TTF/OTF e usa no campo `Fontname` do ASS:

```python
font_name = get_font_family_name(font_path) or font_path.stem
```

Se a fonte não for encontrada, usa `"Arial"` como fallback.
