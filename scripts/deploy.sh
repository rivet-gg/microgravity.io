#!/usr/bin/env bash
set -eu

# Load .env
if [ -f ".env" ]; then
    echo "Loading .env"
    grep -v '^#' .env
    export $(grep -v '^#' .env | xargs)
fi

if [ -z "$RIVET_ACCESS_TOKEN" ]; then
    echo "\$RIVET_ACCESS_TOKEN is empty"
fi

# npm run setup

docker build --file Dockerfile --tag microgravity --squash .
rivetctl build push microgravity --name "Local"

# rm -f public/*.js public/*.js.map
# npm run build-prod
# rivetctl site push ./public/ --name "Local"

