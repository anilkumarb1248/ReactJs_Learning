
import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [message, setMessage] = useState('Hello from Parent!')

    const updateParentMessage = () => {
        // setMessage('Good Bye from Parent!')
        // message == 'Hello from Parent!' ? setMessage('Good Bye from Parent!') : setMessage('Hello from Parent!')
        setMessage(message == 'Hello from Parent!' ? 'Good Bye from Parent!' : 'Hello from Parent!')
    }

    const udpateMessageFromChild = (childMessage) => {
        setMessage(childMessage)
    }

    return (
        <>
            <div>
                <h2> Parent Component </h2>
                <h3>Message in Parent : {message} </h3>
                <button onClick={updateParentMessage}>Update message in Parent</button>
                <hr />
                <Child message={message} updateMessage={udpateMessageFromChild}></Child>
            </div>
        </>
    )
}
export default Parent;
