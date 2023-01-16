
rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install

docker volume create postgres_data
docker-compose up

docker-compose build
docker run --name petfinder -it --rm petfinder /bin/bash
docker run --name petfinder -it petfinder
docker run -it --entrypoint /bin/bash petfinder -c bash
docker run -it --rm --entrypoint /bin/bash petfinder -c bash

docker build -t petfinder .
docker start -d petfinder
docker exec -it petfinder bash


docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune
