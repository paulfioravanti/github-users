import axios from "axios"

export const resolvers = {
  Query: {
    users: async () => {
      const users = await axios.get(process.env.GITHUB_URL)
      return users.data.map(extractData)
    }
  }
}

/* eslint-disable camelcase */
function extractData({ id, login, avatar_url }) {
  return { id, login, avatar_url }
}
/* eslint-enable camelcase */
