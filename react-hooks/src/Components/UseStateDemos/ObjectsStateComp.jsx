
import React, { useState } from 'react'

export default function ObjectsStateComp() {

    const [user, setUser] = useState({ firstName: '', lastName: '' })

    function handleFirstNameChange(e) {
        setUser({...user, firstName: e.target.value })
    }

    function handleLastNameChange(e) {
        setUser({...user, lastName: e.target.value })
    }

    return (
        <div>
            <form>
                <p>FirstName: <input type="text" value={user.firstName} onChange={handleFirstNameChange} /> </p>
                <p>LastName: <input type="text" value={user.lastName} onChange={handleLastNameChange} /> </p>

                <h3>User - FirstName: {user.firstName} , LastName: {user.lastName} </h3>
                <p>Json : {JSON.stringify(user)} </p>
            </form>

        </div>
    )
}
