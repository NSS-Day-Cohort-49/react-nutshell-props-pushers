import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"

export const UserSearch = () => {
  const { setSearchTerms } = useContext(UserContext)

  return (
    <>
     <h1 className="user_header"> All Users</h1>
     <section className="search_bar">
      <div>User search:</div>
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a User... " />
	</section>
    </>
  )
}