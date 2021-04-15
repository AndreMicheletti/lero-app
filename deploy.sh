npm run deploy
git remote update
git fetch
git checkout gh-pages
git push -f pages gh-pages
git checkout master
git push -f pages master
