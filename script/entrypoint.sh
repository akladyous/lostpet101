#!/bin/bash
set -e

echo "Environment: $RAILS_ENV"
bundle check || bundle install --jobs 20 --retry 5

rm -f $APP_PATH/tmp/pids/server.pid

bundle exec rake db:migrate 2>/dev/null || bundle exec rake db:create db:migrate
bundle exec rake db:seed

# bundle exec ${@}
exec "$@"
