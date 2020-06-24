import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { User } from "./User"

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`

export function Users() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  const users = data.users.map(renderUser)
  return users
}

function renderUser(user) {
  return <User key={user.id} user={user} />
}
