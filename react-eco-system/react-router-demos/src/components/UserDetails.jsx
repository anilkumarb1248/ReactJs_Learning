
import React from 'react'
import { useParams } from 'react-router-dom';

function UserDetails() {
    // const params = useParams()
    // const userId = params.userId
    const {userId}=  useParams()

  return (
    <div>
      <h4>User Details Component for UserId : {userId} </h4>
    </div>
  )
}
export default UserDetails;
