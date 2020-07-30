#!/bin/bash

# See https://stackoverflow.com/questions/28690643/firefox-svg-canvas-drawimage-error and https://bugzilla.mozilla.org/show_bug.cgi?id=700533
for f in ../public/img/*/*.svg; do
    echo "Testing $f..."

    # Replace the width and height with the size from the view box
    sed -i '' -E 's/width="[[:digit:]]+%" height="[[:digit:]]+%" viewBox="0 0 ([[:digit:]]+) ([[:digit:]]+)"/width="\1" height="\2" viewBox="0 0 \1 \2"/' $f

    # Only do the first
    # break
done
