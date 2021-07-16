import React from 'react'
import { FriendCard } from './FriendCard'
import './Friend.css'


export const FriendList= () => {
	
	
	return(
		<>
		<div class="row row-cols-1 row-cols-md-3 g-4">
		{friends.map(friend => 
			return(
				<FriendCard key={friend.id} friend={friend} />
			)
			)}

		</div>

		</>
	)
}