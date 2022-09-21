#!/usr/bin/env bash
set -eu

# Load .env
if [ -f ".env.prod" ]; then
    echo "Loading .env.prod"
    grep -v '^#' .env.prod
    export $(grep -v '^#' .env.prod | xargs)
fi

docker build --file Dockerfile --tag microgravity --squash .
rivet --api-url "$RIVET_CLOUD_API_URL" build push --tag microgravity --name "Local"

rm -f public/*.js public/*.js.map
# TODO: See webpack-prod.config.js
npm run build
rivet --api-url "$RIVET_CLOUD_API_URL" site push --path ./public/ --name "Local"

