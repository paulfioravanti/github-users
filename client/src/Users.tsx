import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { ApolloError } from "apollo-boost"
import gql from "graphql-tag"
import { DocumentNode } from "graphql"
import { User, UserProps } from "./User"
import { Maybe } from "./Utils"

type UserData = {
  users: UserProps[]
}

type Result = {
  loading: boolean,
  error?: Maybe<ApolloError>,
  data: Maybe<UserData>
}

const GET_USERS: DocumentNode = gql`
  {
    users {
      id
      login
      avatarUrl
    }
  }
`

export function Users(): JSX.Element {
  const { loading, error, data }: Result = useQuery<UserData>(GET_USERS)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  if (!data) {
    return <h1>No data returned!</h1>
  }

  const users = data.users.map(renderUser)

  return (
    <>
      {users}
    </>
  )
}

function renderUser(props: UserProps): JSX.Element {
  return <User key={props.id} user={props} />
}
