yarn build
cp -a ./out_files/. ./out/
cd out
git add .
git commit -m "deploy $(date)"
git push
