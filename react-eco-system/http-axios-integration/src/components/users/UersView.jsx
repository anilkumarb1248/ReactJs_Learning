
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UersView() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setLoading(false)
                setUsers(response.data)
                setError("")
            })
            .catch((error) => {
                console.log("Error occurred: ", error)
                setLoading(false)
                setUsers([])
                setError(error.message)
            })
    }, [])
    return (
        <div>
            <h2> List of users </h2>
            <ul>
                {
                    loading ? "Loading..." :
                        error ? <div> Error Occrred: {error} </div> :
                            users.length ?
                                users.map((user) => (
                                    <li key={user.id}> Name: {user.name}, Username: {user.username}, Email: {user.email} </li>
                                ))
                                : "Empty Users list"
                }
            </ul>
        </div>
    )
}
export default UersView;
