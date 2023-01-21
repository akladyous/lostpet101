
docker volume create postgres_data
docker volume create shared_data
docker volume create gem_cache

docker-compose -f ./docker-compose.prod.yml up
