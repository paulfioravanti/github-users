import axios from "axios"

const GITHUB_URL = "https://api.github.com/users"

export const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await axios.get(GITHUB_URL)
        return users.data.map(extractData)
      } catch (error) {
        throw error
      }
    },
  },
}

function extractData({ id, login, avatar_url }) {
  return { id, login, avatar_url }
}
