docker rm $(docker stop $(docker ps -a -q --filter="name=lostpet")) -f
docker rmi $(docker images --filter=reference="lostpet101" -q) -f
