// GET  /docs-api/pages — lista TODAS as páginas (publicadas ou não), pro
// painel admin gerenciar. POST /docs-api/pages — cria uma página nova.
// Ambas exigem Authorization: Bearer DOCS_ADMIN_KEY.

import { json, isAuthorized, toPage, parsePageFields } from "../_utils.js"

export async function onRequestGet({ request, env }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  const { results } = await env.DB.prepare(
    `SELECT id, slug, title, description, sidebar, category, order_index, published, created_at, updated_at
     FROM pages ORDER BY sidebar, category, order_index, title`
  ).all()
  return json(results.map(toPage))
}

export async function onRequestPost({ request, env }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: "corpo deve ser JSON válido" }, 400)
  }

  const { error, fields } = parsePageFields(data || {}, { requireCore: true })
  if (error) return json({ error }, 400)

  const now = new Date().toISOString()
  const id = crypto.randomUUID()

  try {
    await env.DB.prepare(
      `INSERT INTO pages
        (id, slug, title, description, content, sidebar, category, order_index, published, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        fields.slug,
        fields.title,
        fields.description ?? "",
        fields.content ?? "",
        fields.sidebar ?? "",
        fields.category ?? "",
        fields.order_index ?? 0,
        fields.published ?? 1,
        now,
        now
      )
      .run()
  } catch (err) {
    if (String(err.message || err).includes("UNIQUE")) {
      return json({ error: `já existe uma página com o slug "${fields.slug}"` }, 409)
    }
    throw err
  }

  const row = await env.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(id).first()
  return json({ page: toPage(row) }, 201)
}
