// POST /docs-api/publish — dispara um novo deploy do site (Cloudflare Pages
// Deploy Hook), que roda o build de novo (sync-docs.mjs + docusaurus build)
// puxando o estado ATUAL do D1. Chamado pelo botão "Publicar site" no admin
// depois de salvar uma página. Exige Authorization: Bearer DOCS_ADMIN_KEY —
// a URL do hook em si fica só no secret DOCS_DEPLOY_HOOK_URL, nunca exposta
// ao client.

import { json, isAuthorized } from "../_utils.js"

export async function onRequestPost({ request, env }) {
  if (!isAuthorized(request, env)) return json({ error: "unauthorized" }, 401)

  if (!env.DOCS_DEPLOY_HOOK_URL) {
    return json({ error: "DOCS_DEPLOY_HOOK_URL não configurado" }, 501)
  }

  const res = await fetch(env.DOCS_DEPLOY_HOOK_URL, { method: "POST" })
  if (!res.ok) {
    return json({ error: `hook respondeu ${res.status}` }, 502)
  }

  const data = await res.json().catch(() => ({}))
  return json({ status: "ok", deployment: data })
}
