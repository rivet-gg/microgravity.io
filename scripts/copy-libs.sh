#!/bin/sh
set -eufx

rm -rf dist
mkdir -p dist

# Generate and copy serivces
for api in identity matchmaker; do
	echo
	echo
	echo "> [api-$api]: Copying Client"
      (cp -r ~/dev/rivet/backend/gen/svc/api-$api/smithy/typescript/ dist/api-$api || cp -r ~/dev/rivet/backend/gen/svc/api-$api/openapi/typescript/ dist/api-$api)

	echo
	echo
	echo "> [api-$api]: Building Client"
      (cd dist/api-$api && npm install && npm run build)
done
