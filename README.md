# Github Users

Toy application based on the
[Apollo GraphQL: How to Build a Full-stack App with React and Node Js][]
tutorial.

Some changes were made to refactor the code, and add in linting with [ESLint][]
and [Typescript][].

## Install

```sh
git clone git@github.com:paulfioravanti/github-users.git
cd github-users
npm install --prefix server
npm install --prefix client
```

## Config

In each of the `client/` and `server/` directories:

```sh
cp .env.example .env
```

## Run Local Server

```sh
npm start --prefix server
npm start --prefix client
```

## Deploy

The back end application is deployed to [Heroku][], while the front end is
deployed to [Github Pages][] using [gh-pages][] and can be found at the
following links:

- [Client][]
- [Server][]

```sh
➜ [github-users (master)]$ git remote -v
heroku-server   https://git.heroku.com/github-users-server.git (fetch)
heroku-server   https://git.heroku.com/github-users-server.git (push)
origin  git@github.com:paulfioravanti/github-users.git (fetch)
origin  git@github.com:paulfioravanti/github-users.git (push)
```

### Deploy Back End

```sh
git subtree push --prefix server heroku-server master
```

### Deploy Front End

```sh
npm run --prefix client build
npm run --prefix client deploy
```

[Apollo GraphQL: How to Build a Full-stack App with React and Node Js]: https://www.freecodecamp.org/news/apollo-graphql-how-to-build-a-full-stack-app-with-react-and-node-js/
[Client]: https://www.paulfioravanti.com/github-users/
[ESLint]: https://eslint.org/
[gh-pages]: https://github.com/tschaub/gh-pages
[Github Pages]: https://pages.github.com/
[Heroku]: https://heroku.com
[Server]: https://github-users-server.herokuapp.com
[Typescript]: https://www.typescriptlang.org/
