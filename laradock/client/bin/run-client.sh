#!/bin/sh

set -ex -u

current_dir="`pwd`"

cd $current_dir/client

# install React.js modules
yarn install

if [ $APP_ENV -eq 'production' ]; then
    yarn clean && yarn run builld-prod
else
    yarn run build-dev
fi
