# RUN POSTGRES ------------------------------------------------------------------
docker run -d \
  -v postgres_data:/var/lib/postgresql/data \
  --env-file .env \
  --name postgres \
  -p 5432:5432 \
  postgres:15-alpine
