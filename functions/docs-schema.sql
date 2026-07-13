-- Schema do CMS de documentação (mesmo D1 dos banners/analytics).
-- Rodar UMA vez: npx wrangler d1 execute sleepcomet-banners --remote --file=functions/docs-schema.sql
CREATE TABLE IF NOT EXISTS pages (
	id TEXT PRIMARY KEY,
	slug TEXT NOT NULL UNIQUE,
	title TEXT NOT NULL,
	description TEXT NOT NULL DEFAULT '',
	content TEXT NOT NULL DEFAULT '',
	sidebar TEXT NOT NULL DEFAULT '',
	category TEXT NOT NULL DEFAULT '',
	order_index INTEGER NOT NULL DEFAULT 0,
	published BOOLEAN NOT NULL DEFAULT true,
	created_at TEXT NOT NULL,
	updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_pages_sidebar ON pages(sidebar, category, order_index);
