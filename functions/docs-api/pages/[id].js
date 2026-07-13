// GET    /docs-api/pages/:id — página completa (com content), pro editor.
// PUT    /docs-api/pages/:id — edita campos de uma página.
// DELETE /docs-api/pages/:id — exclui uma página.
// Todas exigem Authorization: Bearer DOCS_ADMIN_KEY.

import { json, isAuthorized, toPage, parsePageFields } from "../../_utils.js"

export async function onRequestGet({ request, env, params }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  const row = await env.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(params.id).first()
  if (!row) return json({ error: "página não encontrada" }, 404)
  return json({ page: toPage(row) })
}

export async function onRequestPut({ request, env, params }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: "corpo deve ser JSON válido" }, 400)
  }

  const { error, fields } = parsePageFields(data || {}, { requireCore: false })
  if (error) return json({ error }, 400)
  if (Object.keys(fields).length === 0) {
    return json({ error: "nenhum campo para atualizar" }, 400)
  }

  fields.updated_at = new Date().toISOString()
  const sets = Object.keys(fields).map((k) => `${k} = ?`).join(", ")

  try {
    const result = await env.DB.prepare(`UPDATE pages SET ${sets} WHERE id = ?`)
      .bind(...Object.values(fields), params.id)
      .run()
    if (result.meta.changes === 0) return json({ error: "página não encontrada" }, 404)
  } catch (err) {
    if (String(err.message || err).includes("UNIQUE")) {
      return json({ error: `já existe uma página com o slug "${fields.slug}"` }, 409)
    }
    throw err
  }

  const row = await env.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(params.id).first()
  return json({ page: toPage(row) })
}

export async function onRequestDelete({ request, env, params }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  const result = await env.DB.prepare("DELETE FROM pages WHERE id = ?").bind(params.id).run()
  if (result.meta.changes === 0) return json({ error: "página não encontrada" }, 404)
  return json({ ok: true })
}
