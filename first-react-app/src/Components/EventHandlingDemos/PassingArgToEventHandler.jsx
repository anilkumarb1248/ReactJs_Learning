
import React, { useState } from 'react'

function PassingArgToEventHandler() {
    const usersList = [
        {id: 100, name: 'Anil', salary: 10000},
        {id: 101, name: 'Manasvi', salary: 20000},
        {id: 102, name: 'Hithiksha', salary: 30000},
        {id: 103, name: 'Shreetan', salary: 40000}
    ]

    const [users, setUsers] = useState(usersList)

    const handleDeleteUser = (deleteUser, event) => {
        console.log(deleteUser);
        console.log(event);
        setUsers(prevUsers => prevUsers.filter(user => user.id != deleteUser.id));
    }

  return (
    <div>
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        {user.name} - {user.salary}
                        <button onClick={(event)=> handleDeleteUser(user, event)}> Delete User </button>

                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default PassingArgToEventHandler;
