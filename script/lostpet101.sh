
docker volume create postgres_data
docker volume create shared_data
docker volume create gem_cache

docker-compose -f ${PWD}/docker-compose.prod.yml up --build -d
if [ -n "$(docker ps -f "name=lostpet101" -f "status=running" -q )" ]; then
  sleep 3
  docker exec -it lostpet101 rails db:seed
  else
    echo 'containter is not running..'
fi
