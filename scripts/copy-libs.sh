#!/bin/sh
set -euf

mkdir -p gen

# Generate and copy serivces
for api in identity matchmaker party; do
	path="gen/api-$api"

	rm -rf $path

	echo
	echo "> Copying $path"
	(cp -r ../../rivet/backend/gen/svc/api-$api/smithy/typescript/ $path || cp -r ../../rivet/backend/gen/svc/api-$api/openapi/typescript/ $path)
done

./scripts/build-libs.sh

