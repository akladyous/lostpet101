
rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install

# delete all existing docker images & containers & volumes --------------
docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune --force
docker volume rm $(docker volume ls -qf dangling=true)
# ----------------------------------------------------------------------------------------
docker ps -a -q --filter="name=pet" # search container  by name
docker stop $(docker ps -a -q --filter="name=pet") # stop container by name
docker rm $(docker stop $(docker ps -a -q --filter="name=pet")) -f # remove container by name
docker rmi $(docker images --filter=reference="pet*" -q) -f # remove image by name

docker volume create postgres_data
docker volume create shared_data
docker volume create gem_cache


# RUN POSTGRES ------------------------------------------------------------------
docker run -d \
  -v postgres_data:/var/lib/postgresql/data \
  --env-file .env \
  --name postgres \
  -p 5432:5432 \
  postgres:15-alpine
# BUILD FRONTEND && COPY TO RAILS PUBLIC FOLDER --------------------------------
DOCKER_BUILDKIT=1 docker build  --file ./docker/Dockerfile.frontend.prod --tag react --output public .
# RUN FRONTEND DEVELOPMENT --------------------------------
docker build -f ./docker/Dockerfile.frontend.dev --tag frontend .
docker run -d -it --rm  \
  -v ${PWD}/frontend:/app \
  -v /app/node_modules \
  -p 3300:3300 \
  --name frontend \
  frontend


docker build -t petfinder .
docker build --no-cache -f ./docker/Dockerfile.ver1 --target rails -t petfinder .

docker run -it --rm petfinder bash
docker run -it --rm --entrypoint /bin/bash petfinder -c bash
docker run -it --rm --name petfinder petfinder /bin/bash

docker start petfinder
docker exec -it petfinder rails db:seed

