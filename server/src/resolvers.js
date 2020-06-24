import axios from "axios"

export const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await axios.get(process.env.GITHUB_URL)
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
