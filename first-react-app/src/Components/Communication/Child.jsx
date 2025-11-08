
import React from 'react'

function Child(props) {
    return (
        <>
            <div>
                <h3> Child Component </h3>
                <h4> Message in Child: {props.message} </h4>
                <button onClick={()=> props.updateMessage('Hi from Child')}>Update message from Child</button>
            </div>
        </>
    )
}

export default Child;
