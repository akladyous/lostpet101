
rm -rfv ./public/*
npm ci --prefix ./frontend
npm run build --prefix ./frontend
cp -a ./frontend/build/.  ./public
