# RUN FRONTEND DEVELOPMENT --------------------------------
docker build -f ./docker/Dockerfile.frontend.dev --tag frontend .
docker run -d -it --rm  \
  -v ${PWD}/frontend:/app \
  -v /app/node_modules \
  -p 3300:3300 \
  --name frontend \
  frontend
