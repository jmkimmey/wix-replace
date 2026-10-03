# Kimmey Lab Website

> **Public deployment authority:** `https://kimmeylab.com` is served from this
> repository's `gh-pages` branch. Source changes belong on `main`; generated
> `dist/client` output belongs on `gh-pages`. The ChatGPT Sites URL is only a
> separate private preview and does not update the public domain. See
> `AGENTS.md` before publishing.

Static-export version of the Kimmey Lab website.

## What To Deploy

Do not deploy the repository root as plain files. The root contains editable
source files.

The live website is generated into:

```text
dist/client
```

Use these hosting settings:

```text
Build command: pnpm run build:static
Publish directory: dist/client
```

## Editing

- Main text and links: `app/content.ts`
- Current people: `app/data/team.json`
- Publications: `app/data/publications.json`
- Alumni roster: `app/data/alumni_roster.json`
- Images and video: `public/assets/kimmeylab/`

After edits, rebuild before deploying:

```bash
pnpm install
pnpm run build:static
```

## Local Preview

```bash
pnpm install
pnpm run build:static
cd dist/client
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```
