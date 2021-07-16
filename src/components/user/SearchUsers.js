import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"

export const UserSearch = () => {
  const { setSearchTerms } = useContext(UserContext)

  return (
    <>
      User search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a User... " />
    </>
  )
}