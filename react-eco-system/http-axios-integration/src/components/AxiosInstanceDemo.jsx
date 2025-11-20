

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com"
const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

function AxiosInstanceDemo() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])

    useEffect(() => {
        client.get("/posts")
            .then((response => setPosts(response.data)))
            .catch(error => console.log(error.message));

        client.get("/users")
            .then((response => setUsers(response.data)))
            .catch(error => console.log(error.message));

        client.get("/todos")
            .then((response => setTodos(response.data)))
            .catch(error => console.log(error.message));

        client.get("/posts/1")
            .then(response => {
                console.log("First Post: ", response.data)
            })
            .catch(error => console.log(error.message));

    }, [])

    return (
        <div>
            <h2> Axios Instance Creation </h2>
            <div>Posts Size: {posts.length}</div>
            <div>Users Size: {users.length}</div>
           <div>Todos Size: {todos.length}</div>
        </div>
    )
}

export default AxiosInstanceDemo;
