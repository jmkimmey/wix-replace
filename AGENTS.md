# Kimmey Lab deployment authority

- The real public website is `https://kimmeylab.com`.
- It is served by GitHub Pages from `https://github.com/jmkimmey/wix-replace` (the former `jmkimmey/kimmeylab-site` URL redirects there).
- GitHub `main` is the editable public source. GitHub `gh-pages` is the generated public artifact that serves `kimmeylab.com`.
- `https://kimmey-lab.jkimmey.chatgpt.site` and any `.openai/hosting.json` Sites project are a separate private preview. Never use that preview as evidence that `kimmeylab.com` was updated.
- Before editing or publishing, inspect the actual Git remote and fetch `https://kimmeylab.com` to confirm which deployment is in scope.
- For a public change: update this source, run tests and `pnpm run build:static`, push `main`, publish `dist/client` to `gh-pages` while preserving `CNAME` and `.nojekyll`, wait for GitHub Pages to finish, then verify the exact HTML and assets from `https://kimmeylab.com`.
- Do not report completion until the public domain itself returns the intended content. For image changes, verify the live image bytes or hashes and visually inspect the rendered public page.

