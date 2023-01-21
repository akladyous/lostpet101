# BUILD FRONTEND && COPY TO RAILS PUBLIC FOLDER --------------------------------
DOCKER_BUILDKIT=1 docker build  --file ./docker/Dockerfile.frontend.prod --tag react --output public .

