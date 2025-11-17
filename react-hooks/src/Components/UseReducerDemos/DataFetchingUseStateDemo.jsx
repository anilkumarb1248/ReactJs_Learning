
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetchingUseStateDemo() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        console.log("Fetching post detials by id 1");
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        // axios.get(`https://jsonplaceholder.typicode.com/posts/200`) // This will return error
            .then(response => {
                setLoading(false)
                setError('')
                setPost(response.data)
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError("Something went wrong!")
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    )
}
export default DataFetchingUseStateDemo;
