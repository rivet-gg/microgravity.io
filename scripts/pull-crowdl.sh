#!/bin/bash

# NOTE: Disabled for now
echo "Skipping Crowd..."
exit 0

echo "Language list..."
curl https://api.crowdl.io/languages > ./src/client/crowdl/languages.json

echo "Project data..."
curl https://api.crowdl.io/projects/178 > ./src/client/crowdl/projectData.json

echo "Translation counts..."
curl https://api.crowdl.io/178/translationCounts > ./src/client/crowdl/translationsRaw.js

echo "Modifying translation counts..."
sed -i '' -E 's/"language_id": "(.+)",/"language_id": "\1", "data": require(".\/langs\/\1\.json"),/' ./src/client/crowdl/translationsRaw.js  # Add require to specific langauges
cho 'module.exports = ' | cat - ./src/client/crowdl/translationsRaw.js > temp && mv temp ./src/client/crowdl/translationsRaw.js  # Add `module.exports` to beginning of file

cho "Translations..."  # This request was copied from Chrome network inspector
url 'https://api.crowdl.io/178/export' -H 'if-none-match: W/"3e6-165e41a3058"' -H 'origin: https://crowdl.io' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9,hmn;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://crowdl.io/dashboard' -H 'authority: api.crowdl.io' -H 'cookie: __cfduid=d34b9674075667bb9fa6a3cd3c545479d1534493681; sails.sid=s%3ACxIWMLtG43fr3KndQkBf_WTPGaHBdXu8.SL3ihbAWPPK7EilOPpevbJgcpVon%2FLfmTqtDLZj4pCA' -H 'if-modified-since: Sun, 16 Sep 2018 20:37:26 GMT' --compressed -o ./export.zip
nzip -o ./export.zip -d ./src/client/crowdl/langs/
m ./export.zip
