# Hosting the Kimmey Lab site

This repository is the static-export version of the Kimmey Lab website.

## Recommended Netlify settings

- Repository: `jmkimmey/kimmeylab-site`
- Branch: `main`
- Build command: `pnpm run build:static`
- Publish directory: `dist/client`

After the first successful deploy, add `kimmeylab.com` and `www.kimmeylab.com`
as custom domains in the hosting provider. Then update only the website DNS
records in Wix. Leave email and verification records alone.

## Local preview

Run:

```bash
pnpm install
pnpm run build:static
cd dist/client
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.
