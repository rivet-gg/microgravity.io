#!/usr/bin/env bash
set -eu

# Load .env
if [ -f ".env.dev" ]; then
    echo "Loading .env.dev"
    grep -v '^#' .env.dev
    export $(grep -v '^#' .env.dev | xargs)
fi

rm -f public/*.js public/*.js.map
# TODO: See webpack-prod.config.js
npm run build

if [[ -z "${RIVET_CLOUD_API_URL:-}" ]]; then
    rivet site push --path ./public/ --name "Local"
else
    rivet --api-url "$RIVET_CLOUD_API_URL" site push --path ./public/ --name "Local"
fi

# docker build --file Dockerfile --tag microgravity --squash .

# if [[ -z "${RIVET_CLOUD_API_URL:-}" ]]; then
#     rivet build push --tag microgravity --name "Local"
# else
#     rivet --api-url "$RIVET_CLOUD_API_URL" build push --tag microgravity --name "Local"
# fi
