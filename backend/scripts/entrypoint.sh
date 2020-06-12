#!/usr/bin/env sh
set -e

. /venv/bin/activate

python manage.py collectstatic --noinput
# python manage.py makemigrations --noinput
# python manage.py migrate
exec $@
