

import React, { useState } from 'react'

function FunctionClickEvent() {

    const [buttonText, setButtonText] = useState("Click Me!")

    // const hadleBtnClick = () => {
    //     console.log("Button clicked in Functinoal component");
    //     setButtonText("Button Clicked! ")
    // }

    function hadleBtnClick() {
        console.log("Button clicked in Functinoal component");
        setButtonText("Button Clicked! ")
    }


    return (
        <div>
            {/* <button onClick={hadleBtnClick}> {buttonText} (Function Component)</button> */}
            <button onClick={hadleBtnClick}> {buttonText} (Function Component)</button>
        </div>
    )
}

export default FunctionClickEvent;
