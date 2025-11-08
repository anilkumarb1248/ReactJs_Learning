
import React, { useState } from 'react'

function DataBindingDemo() {

    const [name, setName] = useState('Anil')

    const updateName = () => {
        setName("Bandari")
    }

    const onChangeInput = () => {

    }

    return (
        <div>
            <p> Current Name: <b> {name} </b> </p> <button onClick={updateName}>Update Name to Bandari </button>
            <input type="text" onChange={onChangeInput} value={name} />
        </div>
    )
}

export default DataBindingDemo;
