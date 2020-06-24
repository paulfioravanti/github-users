# Github Users

Toy application based on the
[Apollo GraphQL: How to Build a Full-stack App with React and Node Js][]
tutorial.

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

## Run Server

```sh
npm start --prefix server
npm start --prefix client
```

[Apollo GraphQL: How to Build a Full-stack App with React and Node Js]: https://www.freecodecamp.org/news/apollo-graphql-how-to-build-a-full-stack-app-with-react-and-node-js/
