# git reset --hard HEAD
# git fetch --all
# git pull

docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune --force
docker volume rm $(docker volume ls -qf dangling=true)

docker ps -a -q --filter="name=pet"
docker stop $(docker ps -a -q --filter="name=pet")

docker rm $(docker stop $(docker ps -a -q --filter="name=pet")) -f
docker rmi $(docker images --filter=reference="pet*" -q) -f

docker volume create postgres_data
docker volume create petfinder_data
docker compose build
docker compose up -d
docker exec -it petfinder rails db:seed

docker build --no-cache -f ./docker/Dockerfile.ver3 --target rails -t petfinder .
docker run -it --rm petfinder bash
