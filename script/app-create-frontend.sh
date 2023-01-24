
rm -rfv ./public/*
npm ci --prefix ./frontend
npm run build --prefix ./frontend
cp -a ./frontend/build/.  ./public
rm -r ./frontend/build
rm -r ./frontend/node_modules
