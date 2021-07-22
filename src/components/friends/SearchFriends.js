import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import "./Friend.css"

export const FriendSearch = () => {
  const { setSearchTerms } = useContext(FriendContext)

  return (
    <>
    <h1 className="user_header"> My Friends</h1>
    <section className="search_bar">
     <div>Friend search:</div>
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an Friend... "
	 />
	</section>
    </>
  )
}