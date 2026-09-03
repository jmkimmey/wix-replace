#!/bin/zsh
set -e

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
PNPM="/Users/jkimmey/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm"
export PATH="/Users/jkimmey/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"

cd "$SITE_DIR"

if lsof -nP -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Kimmey Lab site is already running."
  open "http://localhost:3000/"
  exit 0
fi

echo "Starting Kimmey Lab site..."
echo "Leave this Terminal window open while you use the local site."

(sleep 5 && open "http://localhost:3000/") &
"$PNPM" run dev
