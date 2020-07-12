import apollo from "apollo-server"
import dotenv from "dotenv"
import { typeDefs } from "./schema.js"
import { resolvers } from "./resolvers.js"

const { ApolloServer } = apollo

dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

// NOTE: Port config is to allow Heroku to choose the port the server is
// deployed to in production.
server
  .listen({ port: process.env.PORT || 4000 })
  // eslint-disable-next-line no-console
  .then(({ url }) => console.log(`Server ready at ${url}`))
