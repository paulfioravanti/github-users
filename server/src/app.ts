import { config } from "dotenv"

config()

import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"

const PORT: string = process.env.PORT || "4000"

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

// NOTE: Port config is to allow Heroku to choose the port the server is
// deployed to in production.
server
  .listen({ port: PORT })
  // eslint-disable-next-line no-console
  .then(({ url }) => console.log(`Server ready at ${url}`))
