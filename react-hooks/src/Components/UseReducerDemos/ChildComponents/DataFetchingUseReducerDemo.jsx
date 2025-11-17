

import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialValue = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case "FAILURE":
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {}
            }
        default:
            return state

    }
}

function DataFetchingUseReducerDemo() {
    const [state, disapatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        console.log("Fetching post detials by id 1");
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        // axios.get(`https://jsonplaceholder.typicode.com/posts/200`) // This will return error
            .then(response => {
                disapatch({ type: 'SUCCESS', payload: response.data })
            })
            .catch(error => {
                disapatch({ type: 'FAILURE' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default DataFetchingUseReducerDemo;
