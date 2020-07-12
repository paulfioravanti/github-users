import axios, { AxiosResponse } from "axios"
import { IResolvers } from "apollo-server"

type UserData = {
  id: string,
  login: string,
  avatar_url: string
}

type UserProps = {
  id: string,
  login: string,
  avatarUrl: string
}

let GITHUB_URL: string

if (process.env.GITHUB_URL) {
  GITHUB_URL = process.env.GITHUB_URL
} else {
  throw new Error("GITHUB_URL needs to be set!")
}

export const resolvers: IResolvers = {
  Query: {
    users: async (): Promise<UserProps[]> => {
      const users: AxiosResponse = await axios.get(GITHUB_URL)
      return users.data.map(extractData)
    }
  }
}

/* eslint-disable camelcase */
function extractData({ id, login, avatar_url }: UserData): UserProps {
  return { id, login, avatarUrl: avatar_url }
}
/* eslint-enable camelcase */
