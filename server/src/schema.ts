import { gql } from "apollo-server"
import { DocumentNode } from "graphql"

export const typeDefs: DocumentNode = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    users: [User]
  }
`
