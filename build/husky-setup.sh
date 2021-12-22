#!/bin/bash -eu

if [ -d ./.git ]; then
    npx husky install && npx husky set .husky/pre-push "yarn lint:fix"
else
    echo "skip husky init setting"
    exit 0
fi

exit 0
