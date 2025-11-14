
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function DataFetchIndividualPosts() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    useEffect(() => {
        console.log("Fetching post detials by id: " + idFromBtnClick);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(response => {
                console.log(response);
                setPost(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [idFromBtnClick])

    const handleBtnClick = () => {
        setIdFromBtnClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={handleBtnClick}> Fetch Post </button>
            <h3>{post.id} : {post.title} </h3>
        </div>
    )
}

