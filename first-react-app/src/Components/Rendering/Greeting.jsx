
import React, { useState } from 'react'

function Greeting() {
    const [isLoggedIn] = useState(true)

    return isLoggedIn && <h2>Welcom Anil Kumar!</h2>

    // return (
    //     <div>
    //         {isLoggedIn ? (<h2>Welcom Anil Kumar!</h2>) : (<h2>Please Login to Continue!</h2>)}
    //     </div>
    // )

    // let message;
    // if(isLoggedIn) {
    //     message = <h2>Welcom Anil Kumar!</h2>
    // } else {
    //     message = <h2>Please Login to Continue!</h2>
    // }
    // return <div> {message} </div>



    // if(isLoggedIn) {
    //     return <h2>Welcom Anil Kumar!</h2>
    // } else {
    //     return <h2>Please Login to Continue!</h2>
    // }
}

export default Greeting;
