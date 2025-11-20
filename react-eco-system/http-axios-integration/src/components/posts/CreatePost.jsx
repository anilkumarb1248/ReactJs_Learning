
import React, { useState } from 'react'
import axios from 'axios'

function CreatePost() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const createPost = (e) => {
        e.preventDefault();
        console.log("Title: " + title + " Body: " + body);
        axios.post("https://jsonplaceholder.typicode.com/posts", 
            { title: title, body: body })
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Post Data: ", response.data);
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={(e) => createPost(e)}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />
                </div>
                <div>
                    <label>Body: </label>
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter Body' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreatePost;
