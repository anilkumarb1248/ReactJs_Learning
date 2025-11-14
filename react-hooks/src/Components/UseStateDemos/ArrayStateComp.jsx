
import React, { useState } from 'react'

export default function ArrayStateComp() {

    const [items, setItems] = useState([]);

function addItem() {
    setItems([...items, // 1. Copy all existing items from the previous array
    {                   // 2. Add the new object/item
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
}

    return (
        <div>
            <button onClick={addItem}> Add a number </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}> {item.value} </li>
                ))}
            </ul>
        </div>
    )
}

