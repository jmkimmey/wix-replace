# Editing the Kimmey Lab site

Most routine edits are intentionally concentrated in a few small files.

## Main text and links

Edit `app/content.ts`.

This file controls the lab name, tagline, research text, video credit, joining text, email addresses, Instagram link, and the YouTube embed URL.

The lab video is currently set to the YouTube embed URL for `Jo50HUtDo-Q`. To swap it later, replace the value with another embed URL:

```ts
embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
```

YouTube gives this URL from Share > Embed. Copy only the `src` URL from the iframe.

## People

Edit `app/data/team.json`.

Each current lab member has a name, title, dates, highlights, and photo path. The homepage currently shows the first eight current members.

## Publications

Edit `app/data/publications.json`.

The homepage shows the five newest publications. The `/publications` page shows all publications, and each publication has its own detail page using the `slug`, `abstract`, `news`, and `press` fields.

## Instagram

Edit `instagram` in `app/content.ts`.

The site currently uses a stable manual Instagram block with a profile link and three featured images. A live feed would need an Instagram API/widget/token, which is less durable for a small self-editable site.

## Images and video

Assets live in `public/assets/kimmeylab/`.

You can add images there and point to them from `app/content.ts`, `app/data/team.json`, or `app/data/publications.json`.

## Running locally

The easiest local option is to double-click:

```text
Open Kimmey Lab Site.command
```

That starts the site and opens `http://localhost:3000/`. Leave the Terminal window open while you use the local site. You can bookmark `http://localhost:3000/`, but the bookmark only works after the local site has been started.

If you prefer the manual command, from this folder:

```bash
pnpm run dev
```

Then open the local URL that appears in the terminal.

## Setup from scratch

From this folder:

```bash
pnpm install
```
