

docker build -t lostpet101 .
docker build --no-cache -f ~/lostpet101/docker/Dockerfile.ver1 -t lostpet101 .

docker run -it --rm lostpet101 bash
docker run -it --rm --entrypoint /bin/bash lostpet101 -c bash
docker run -it --rm --name lostpet101 lostpet101 /bin/bash



