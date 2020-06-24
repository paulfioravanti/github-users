import apollo from "apollo-server"
const { gql } = apollo

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    users: [User]
  }
`
