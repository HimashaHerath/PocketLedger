#!/bin/bash
set -e

# Check if SECRET_KEY_BASE is set, if not, generate one
if [ -z "$SECRET_KEY_BASE" ]; then
  export SECRET_KEY_BASE=$(bundle exec rails secret)
fi

# Prepare the database (run migrations if any)
bundle exec rails db:prepare

# Then exec the container's main process (what's set as CMD in the Dockerfile)
exec "$@"
