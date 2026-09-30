#!/usr/bin/env bash
# Builds the site and mirrors ./dist to the FORPSI FTP www/ directory.
# Usage: npm run deploy [-- --dry-run]
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "Missing .env - copy .env.example to .env and fill in the FTP credentials." >&2
  exit 1
fi
set -a; source .env; set +a

: "${FTP_USER:?FTP_USER is not set in .env}"
: "${FTP_PASSWORD:?FTP_PASSWORD is not set in .env}"
FTP_HOST="${FTP_HOST:-ftpx.forpsi.com}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-www}"

if ! command -v lftp >/dev/null; then
  echo "lftp is not installed - run: brew install lftp" >&2
  exit 1
fi

# Dotfiles (e.g. .htaccess) on the server are excluded, so --delete never removes them.
MIRROR="mirror --reverse --verbose --parallel=4 --exclude-glob .*"
if [[ "${1:-}" == "--dry-run" ]]; then
  MIRROR+=" --dry-run"
  echo "Dry run - nothing will be uploaded or deleted."
fi

npm run build

# 1. static/: JS, CSS and images have content-hashed names, so an existing name means
#    unchanged content - compare by size only (--ignore-time) and upload just the new ones.
# 2. HTML pages (fixed names) go up only after the assets they reference exist.
# 3. Remove files no longer in the build (old hashed assets) - nothing else differs by now.
LFTP_PASSWORD="$FTP_PASSWORD" lftp -u "$FTP_USER" --env-password "$FTP_HOST" <<EOF
set net:max-retries 2
$MIRROR --ignore-time dist/static/ ${FTP_REMOTE_DIR}/static/
$MIRROR --exclude ^static/ dist/ ${FTP_REMOTE_DIR}/
$MIRROR --ignore-time --delete dist/ ${FTP_REMOTE_DIR}/
bye
EOF
