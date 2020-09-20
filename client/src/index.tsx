import React from "react"
import ReactDOM from "react-dom"
import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import { ApolloProvider } from "@apollo/react-hooks"

import "./index.css"
import { App } from "./App"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_APOLLO_SERVER_URL
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
