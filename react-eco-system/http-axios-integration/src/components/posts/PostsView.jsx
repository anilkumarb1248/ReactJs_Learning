
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    data: [],
    error: ""
}

const LOADING_POSTS = "LOADING_POSTS"
const LOADING_POSTS_SUCCESS = "LOADING_POSTS_SUCCESS"
const LOADING_POSTS_FAILED = "LOADING_POSTS_FAILED"


const reducer = (state, action) => {
    switch (action.type) {
        case LOADING_POSTS:
            return {
                ...state,
                loading: true,
                data: [],
                error: ""
            }
        case LOADING_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case LOADING_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.error
            }
        default: {
            return state;
        }
    }
}

function PostsView() {

    const [posts, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: LOADING_POSTS })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch({ type: LOADING_POSTS_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: LOADING_POSTS_FAILED, error: error.message })
                console.log("Error occrred: ", error)
            })
    }, [])

    return (
        <div>
            <h2>List of posts </h2>
            {
                posts.loading ? 'Loading ...' :
                    posts.error ? <div>Error Occurred: {posts.error} </div> :
                        <ul>
                            {
                                posts.data.length ?
                                    posts.data.map((post) => (
                                        <li key={post.id}> {post.title} </li>
                                    ))
                                    : "Empty posts list"
                            }
                        </ul>
            }
        </div>
    )
}

export default PostsView;
