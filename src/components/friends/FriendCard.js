import React from 'react'
import "./Friend.css"


export const FriendCard = ({friend}) => {
	return(
	<>
		<div className="col">
    			<div className="card">
     			 <img src={friend.user.profile_pic} className="card-img-top" alt={friend.user.name} />
      			<div className="card-body">
        		<h5 className="card-title">{friend.user.name}</h5>
        		<div className="card-text">{friend.user.email}</div>
      			</div>
    			</div>
  		</div>
		
		</>
	)
}