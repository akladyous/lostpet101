docker volume rm $(docker volume ls -qf name=postgres_data)
docker volume rm $(docker volume ls -qf name=shared_data)
docker volume rm $(docker volume ls -qf name=gem_cache)
