import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("dist/client");

async function walk(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);

    if (info.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    if (!entry.endsWith(".html") || entry === "index.html" || entry === "404.html") {
      continue;
    }

    const routeDir = path.join(dir, entry.replace(/\.html$/, ""));
    await mkdir(routeDir, { recursive: true });
    await copyFile(fullPath, path.join(routeDir, "index.html"));
  }
}

await walk(outputDir);
