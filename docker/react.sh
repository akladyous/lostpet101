rm -rf ./public/**
cp -a client/package.json /app/client/package.json
npm install --prefix ./client
npm run build --prefix ./client
cp -a ./client/build/.  ./public
rm ./client/build -r
