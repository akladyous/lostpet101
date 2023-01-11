# UBUNTU INSTANCE CONFIGURATION

apt-get -y install sudo
sudo apt update && sudo apt upgrade -y

sudo adduser paolo // Adding a New User to the System
sudo usermod -aG sudo paolo //add the user to the sudo group:
su - paolo //switch to the new user account:
sudo passwd // set new password

sudo passwd paolo // set new password for user
docker volume create postgres_data



rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install

docker volume create postgres_data
docker run -d \
	--name postgres \
	-e POSTGRES_USER=user \
	-e POSTGRES_PASSWORD=password \
	-v postgres_data:/var/lib/postgresql/data \
	postgres

docker-compose build
docker-compose up
docker run --name petfinder -it --rm petfinder /bin/bash
docker run --name petfinder -it petfinder
docker run -it --entrypoint /bin/bash petfinder -c bash
docker run -it --rm --entrypoint /bin/bash petfinder -c bash

docker build -t petfinder .
docker start -d petfinder
docker exec -it petfinder bash

