
import React, { useState } from 'react'
import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com"
const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

function BasicSyntaxDemo() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await client.get("/users");
            setUsers(response.data)
        } catch (error) {
            console.log("Error while fetching users data: ", error);
        }
    }

    return (
        <div>
            <h2> Async/Await Basic Syntax </h2>
            <div>Users Size: {users.length}</div>
            <button onClick={fetchUsers}>Fetch Users</button>
        </div>
    )
}
export default BasicSyntaxDemo;
