# Crash-Course-MERN

## How to deploy a monorepo to multiple Heroku apps using GitHub Actions

```
heroku create tiktok-clone-backend-heroku
heroku create tiktok-clone-frontend-heroku

heroku buildpacks:add -a tiktok-clone-backend-heroku heroku/nodejs
heroku buildpacks:add -a tiktok-clone-frontend-heroku mars/create-react-app

heroku buildpacks:add -a tiktok-clone-backend-heroku https://github.com/lstoll/heroku-buildpack-monorepo -i 1
heroku buildpacks:add -a tiktok-clone-frontend-heroku https://github.com/lstoll/heroku-buildpack-monorepo -i 1

git remote add tiktok-clone-backend-heroku https://git.heroku.com/tiktok-clone-backend-heroku.git
git remote add tiktok-clone-frontend-heroku https://git.heroku.com/tiktok-clone-frontend-heroku.git

heroku config:set -a tiktok-clone-backend-heroku APP_BASE=TikTok/tiktok-backend/
heroku config:set -a tiktok-clone-frontend-heroku APP_BASE=TikTok/tiktok-frontend/

git push tiktok-clone-backend-heroku master
git push tiktok-clone-frontend-heroku master
```
