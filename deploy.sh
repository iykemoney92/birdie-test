# script assumes git and heroku is installed in machine
# https://git-scm.com/book/en/v2/Getting-Started-Installing-Git for git installation 
# https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli for heroku installation
cd backend
npm install
npm run compile
cd ../frontend
npm install
npm run build
cd ../
echo "node_modules" .gitignore
cp ./backend/package.json ./
git init
git add .
git commit -m "A commit 😊!!!"
heroku login
heroku create -a 'name-it-whatever-you-want'
git remote -v #to confirm that a remote named heroku has been set for your app
git push heroku master
heroku ps:scale web=1
heroku logs --tail