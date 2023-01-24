docker rm $(docker stop $(docker ps -a -q --filter="name=lostpet101")) -f
docker rmi $(docker images --filter=reference="lostpet101" -q) -f
