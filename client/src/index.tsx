import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

import "./index.css"
import { App } from "./App"
import { Maybe } from "./Utils"

type ClientProps = {
  uri: Maybe<string>
}

const client: ApolloClient<ClientProps> = new ApolloClient<ClientProps>({
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
