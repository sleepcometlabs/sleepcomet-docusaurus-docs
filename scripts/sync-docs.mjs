#!/usr/bin/env node
// Roda ANTES de `docusaurus build`: busca todas as páginas publicadas no
// banco (fonte da verdade, editada pelo admin) e regenera docs/docs/**/*.md
// a partir delas — o build do Docusaurus continua 100% normal depois disso,
// só que os arquivos que ele lê agora vêm do D1 em vez de serem editados
// manualmente. Arquivos gerados fora do conjunto atual são removidos, pra
// docs/docs/ ser sempre um espelho exato do que está publicado agora.

import { mkdir, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const DOCS_API_URL = process.env.DOCS_API_URL || "https://docs.sleepcomet.com"
const DOCS_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "docs")

function frontmatter(page) {
  const esc = (s) => String(s ?? "").replace(/\r?\n/g, " ").trim()
  const lines = ["---"]
  lines.push(`title: ${esc(page.title)}`)
  if (page.description) lines.push(`description: ${esc(page.description)}`)
  lines.push("---", "")
  return lines.join("\n")
}

async function listPublishedSlugs() {
  const res = await fetch(`${DOCS_API_URL}/docs-api/public`)
  if (!res.ok) throw new Error(`falha ao listar páginas: ${res.status}`)
  const rows = await res.json()
  return rows.map((r) => r.slug)
}

async function fetchPage(slug) {
  const res = await fetch(`${DOCS_API_URL}/docs-api/public/${slug}`)
  if (!res.ok) throw new Error(`falha ao buscar "${slug}": ${res.status}`)
  return res.json()
}

async function listExistingMdFiles(dir) {
  const out = []
  async function walk(current) {
    const entries = await readdir(current, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) await walk(full)
      else if (entry.name.endsWith(".md")) out.push(full)
    }
  }
  try {
    await walk(dir)
  } catch {
    // docs/ ainda não existe — nada pra listar
  }
  return out
}

async function main() {
  console.log(`[sync-docs] buscando páginas publicadas em ${DOCS_API_URL}...`)
  const slugs = await listPublishedSlugs()
  console.log(`[sync-docs] ${slugs.length} página(s) publicada(s)`)

  const written = new Set()
  for (const slug of slugs) {
    const page = await fetchPage(slug)
    const filePath = path.join(DOCS_DIR, `${slug}.md`)
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, `${frontmatter(page)}\n${page.content ?? ""}\n`, "utf-8")
    written.add(path.resolve(filePath))
  }

  const existing = await listExistingMdFiles(DOCS_DIR)
  let removed = 0
  for (const file of existing) {
    if (!written.has(path.resolve(file))) {
      await rm(file)
      removed++
    }
  }

  console.log(`[sync-docs] ${written.size} arquivo(s) escrito(s), ${removed} removido(s) (não publicados)`)
}

main().catch((err) => {
  console.error("[sync-docs] falhou:", err)
  process.exit(1)
})
