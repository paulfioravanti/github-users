import React from "react"
import "./App.css"
import { Users } from "./Users"

export function App(): JSX.Element {
  return (
    <main className="App">
      <h1>Github | Users</h1>
      <Users />
    </main>
  )
}
