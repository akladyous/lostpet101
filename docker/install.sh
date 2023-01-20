
rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install

# delete all existing docker images & containers & volumes
docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune --force
docker volume rm $(docker volume ls -qf dangling=true)

docker ps -a -q --filter="name=pet" # search container  by name
docker stop $(docker ps -a -q --filter="name=pet") # stop container by name
docker rm $(docker stop $(docker ps -a -q --filter="name=pet")) -f # remove container by name
docker rmi $(docker images --filter=reference="pet*" -q) -f # remove image by name

docker volume create postgres_data
docker volume create petfinder_data
docker-compose up

docker-compose build
docker-compose up

docker run --env-file .env.production -d --name postgres postgres:15-alpine
docker run --name petfinder -it --rm petfinder /bin/bash
docker run --name petfinder -it petfinder
docker run -it --entrypoint /bin/bash petfinder -c bash
docker run -it --rm --entrypoint /bin/bash petfinder -c bash

docker build --no-cache -f ./docker/Dockerfile.ver1 --target rails -t petfinder .
docker run -it --rm petfinder bash

docker build -t petfinder .
docker start petfinder
docker exec -it petfinder bash
