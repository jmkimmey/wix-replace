import { access, readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

test("home page source contains lab sections and no starter preview", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");

  assert.match(page, /Kimmey Lab/i);
  assert.match(page, /id="research"/);
  assert.match(page, /id="video"/);
  assert.match(page, /id="people"/);
  assert.match(content, /Jo50HUtDo-Q/);
  assert.match(page, /\/people/);
  assert.match(page, /\/publications/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|react-loading-skeleton/);
});

test("source keeps deeper pages for people, alumni, and publications", async () => {
  await access(new URL("../app/people/page.tsx", import.meta.url));
  await access(new URL("../app/people/[slug]/page.tsx", import.meta.url));
  await access(new URL("../app/alumni/[slug]/page.tsx", import.meta.url));
  await access(new URL("../app/publications/page.tsx", import.meta.url));
  await access(new URL("../app/publications/[slug]/page.tsx", import.meta.url));
});

test("internal navigation uses plain browser anchors", async () => {
  const files = [
    "../app/page.tsx",
    "../app/components/PersonCard.tsx",
    "../app/components/SiteHeader.tsx",
    "../app/people/page.tsx",
    "../app/people/[slug]/page.tsx",
    "../app/alumni/[slug]/page.tsx",
    "../app/publications/page.tsx",
    "../app/publications/[slug]/page.tsx",
  ];

  for (const file of files) {
    const source = await readFile(new URL(file, import.meta.url), "utf8");
    assert.doesNotMatch(source, /next\/link|<Link\b/);
  }
});

test("build emits the worker and social image", async () => {
  await access(new URL("../dist/server/index.js", import.meta.url));
  await access(new URL("../dist/client/og.png", import.meta.url));
});
