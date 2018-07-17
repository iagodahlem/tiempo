docker create \
  -v /var/lib/postgresql/data \
  --name postgres-data \
  busybox

docker run \
  -d \
  -p 5432:5432 \
  --name pomodoro-postgres \
  --volumes-from postgres-data \
  postgres:alpine

docker exec -it -u postgres pomodoro-postgres sh

createuser pomodoro --superuser
