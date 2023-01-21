# delete all existing docker images & containers & volumes --------------
docker stop $(docker ps -a -q)
docker rmi -f $(docker images -aq)
docker system prune --force
docker volume rm $(docker volume ls -qf dangling=true)

