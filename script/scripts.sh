

# ----------------------------------------------------------------------------------------

docker build -t lostpet101 .
docker build --no-cache -f ./docker/Dockerfile.ver1 --target rails -t lostpet101 .

docker run -it --rm lostpet101 bash
docker run -it --rm --entrypoint /bin/bash lostpet101 -c bash
docker run -it --rm --name lostpet101 lostpet101 /bin/bash

docker start lostpet101
docker exec -it lostpet101 rails db:seed

