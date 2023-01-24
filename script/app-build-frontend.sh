
rm -rfv ./public/*
rm -r ./frontend/build
npm run build --prefix ./frontend
cp -a ./frontend/build/.  ./public
