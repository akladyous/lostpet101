#!/bin/bash
set -e

echo "Environment: $RAILS_ENV"
bundle check || bundle install --jobs 20 --retry 5
rm -f $APP_PATH/tmp/pids/server.pid

./bin/rails db:create db:migrate

exec "$@"
