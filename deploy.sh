npm run deploy
git remote update
git fetch
git checkout gh-pages
git remote update
git fetch
git push -f pages gh-pages
git checkout master
