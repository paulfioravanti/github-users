import React from "react"

export function User({ user: { login, avatar_url } }) {
  const profileUrl = `${process.env.GITHUB_URL}${login}`

  return (
    <div className="Card">
      <div>
        <img alt="avatar" className="Card--avatar" src={avatar_url} />
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
