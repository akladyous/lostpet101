docker volume create postgres_data
docker volume create petfinder_data
docker compose up -d
docker exec -it petfinder rails db:seed
