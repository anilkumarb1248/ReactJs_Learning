import { useState } from "react";

function UserProfile() {

    const [user, setUser] = useState({
        name: 'Anil Kumar',
        age: 35
    })

    const increaseAge = () => {
        setUser({ ...user, age: user.age + 1 }) // use spread operator
    }

    return (
        <>
            <h3>Name: {user.name}, Age: {user.age} </h3>
            <button onClick={increaseAge}>Increase Age</button>
        </>
    )
}

export default UserProfile;