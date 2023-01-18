
rm -rfv ./public/*
npm ci --prefix ./client
npm run build --prefix ./client
cp -a ./client/build/.  ./public
rm ./client/build -r
