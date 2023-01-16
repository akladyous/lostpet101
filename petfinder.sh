# git reset --hard HEAD
# git fetch --all
# git pull

docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune --force
docker volume create postgres_data
docker compose build & docker compose up
