#!/bin/bash
set -e

echo "Environment: $RAILS_ENV"

# Check and install missing gems
bundle check || bundle install --jobs 20 --retry 5

# Remove pre-existing server.pid
rm -f "$APP_PATH/tmp/pids/server.pid"

# Database setup and migrations
if bundle exec rake db:migrate 2>/dev/null; then
    echo "Database migrated successfully."
else
    echo "Database does not exist. Creating and migrating the database..."
    bundle exec rake db:create db:migrate
fi

# Execute the container's main process
exec "$@"
