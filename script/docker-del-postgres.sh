docker rm $(docker stop $(docker ps -a -q --filter="name=postgres")) -f
docker rmi $(docker images --filter=reference="postgres" -q) -f
