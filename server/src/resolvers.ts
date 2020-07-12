import axios, { AxiosResponse } from "axios"
import { IResolvers } from "apollo-server"

type User = {
  id: string,
  login: string,
  avatar_url: string
}

let GITHUB_URL: string

if (process.env.GITHUB_URL) {
  GITHUB_URL = process.env.GITHUB_URL
} else {
  throw new Error("GITHUB_URL needs to be set!")
}

export const resolvers: IResolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      const users: AxiosResponse = await axios.get(GITHUB_URL)
      return users.data.map(extractData)
    }
  }
}

/* eslint-disable camelcase */
function extractData({ id, login, avatar_url }: User): User {
  return { id, login, avatar_url }
}
/* eslint-enable camelcase */
