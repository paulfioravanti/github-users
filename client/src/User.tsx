import React from "react"

export type UserProps = {
  id: string,
  login: string,
  avatarUrl: string
}

type Props = {
  user: UserProps
}

let GITHUB_URL: string

if (process.env.REACT_APP_GITHUB_URL) {
  GITHUB_URL = process.env.REACT_APP_GITHUB_URL
} else {
  throw new Error("REACT_APP_GITHUB_URL needs to be set!")
}

export function User({ user: { login, avatarUrl } }: Props): JSX.Element {
  const profileUrl: string = `${GITHUB_URL}${login}`

  return (
    <div className="Card">
      <div>
        <img alt="avatar" className="Card--avatar" src={avatarUrl} />
        <h1 className="Card--name">
          {login}
        </h1>
      </div>
      <a href={profileUrl} className="Card--link">
        See profile
      </a>
    </div>
  )
}
