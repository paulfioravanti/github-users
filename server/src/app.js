import apollo from "apollo-server"
import { typeDefs } from "./schema.js"
import { resolvers } from "./resolvers.js"

const { ApolloServer, gql } = apollo

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
