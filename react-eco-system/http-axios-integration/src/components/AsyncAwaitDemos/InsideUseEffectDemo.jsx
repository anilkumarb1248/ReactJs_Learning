
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com"
const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

function InsideUseEffectDemo() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await client.get("/users");
                setUsers(response.data)
            } catch (error) {
                console.log("Error while fetching users data: ", error);
            }
        }
        fetchUsers();
    }, [])
    return (
        <div>
            <h2> Async/Await Inside useEffect Hook</h2>
            <div>Users Size: {users.length}</div>
        </div>
    )
}


export default InsideUseEffectDemo;
