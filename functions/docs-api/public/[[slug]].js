// GET /docs-api/public/<slug> — leitura pública (sem auth) de UMA página
// publicada, por slug (ex.: /docs-api/public/features/clips). Sem :id
// literal no meio pra caber slugs com "/", por isso o catch-all [[slug]].
// GET /docs-api/public — sem slug, lista o índice (só publicadas) pra
// montar navegação/sidebar em qualquer consumidor.

import { json, toPage } from "../../_utils.js"

export async function onRequestGet({ params, env }) {
  const segments = params.slug || []

  if (segments.length === 0) {
    const { results } = await env.DB.prepare(
      `SELECT slug, title, description, sidebar, category, order_index
       FROM pages WHERE published = 1 ORDER BY sidebar, category, order_index, title`
    ).all()
    return json(results, 200, { "cache-control": "public, max-age=60" })
  }

  const slug = segments.join("/")
  const row = await env.DB.prepare(
    "SELECT slug, title, description, content, sidebar, category FROM pages WHERE slug = ? AND published = 1"
  )
    .bind(slug)
    .first()

  if (!row) return json({ error: "página não encontrada" }, 404)
  return json(toPage(row), 200, { "cache-control": "public, max-age=60" })
}
