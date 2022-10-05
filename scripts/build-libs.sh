#!/bin/sh
set -euf

# Generate and copy serivces
for path in $(find gen/ -type d -name 'api-*'); do
	echo
	echo
	echo "> Building $path"
	(cd $path && yarn install && yarn run build)
done

# Install packages
rm -rf node_modules/
yarn install

