import apollo from "apollo-server"
import dotenv from "dotenv"
import { typeDefs } from "./schema.js"
import { resolvers } from "./resolvers.js"

const { ApolloServer, gql } = apollo

dotenv.config()
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
