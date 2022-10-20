set -x
cd /qacloud
yarn install --frozen-lockfile
exec yarn start --host=0.0.0.0