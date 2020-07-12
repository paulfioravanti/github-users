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

Both the front end and back end applications have been deployed to [Heroku][],
and can be found at the following links:

- [Client][]
- [Server][]

```sh
➜ [github-users (master)]$ git remote -v
heroku-client   https://git.heroku.com/github-users-client.git (fetch)
heroku-client   https://git.heroku.com/github-users-client.git (push)
heroku-server   https://git.heroku.com/github-users-server.git (fetch)
heroku-server   https://git.heroku.com/github-users-server.git (push)
origin  git@github.com:paulfioravanti/github-users.git (fetch)
origin  git@github.com:paulfioravanti/github-users.git (push)
```

Both applications share the same Github repository, but are deployed to
separate Heroku instance using `git subtree`:

```sh
git subtree push --prefix client heroku-client master
git subtree push --prefix server heroku-server master
```

[Apollo GraphQL: How to Build a Full-stack App with React and Node Js]: https://www.freecodecamp.org/news/apollo-graphql-how-to-build-a-full-stack-app-with-react-and-node-js/
[Client]: https://github-users-client.herokuapp.com
[ESLint]: https://eslint.org/
[Heroku]: https://heroku.com
[Server]: https://github-users-server.herokuapp.com
[Typescript]: https://www.typescriptlang.org/
