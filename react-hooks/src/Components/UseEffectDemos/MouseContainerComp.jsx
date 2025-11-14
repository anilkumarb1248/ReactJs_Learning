
import React, { useState } from 'react'
import OnlyOnceHookCompDemo from './OnlyOnceHookCompDemo'

export default  function MouseContainerComp() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <h3 >MouseContainerComp Component </h3>
            <button onClick={() => setDisplay(!display)}> Toggle Display </button>
            {/* {display && <h3> Child Displaying </h3>} */}
            { display && <OnlyOnceHookCompDemo/> }
        </div>
    )
}

