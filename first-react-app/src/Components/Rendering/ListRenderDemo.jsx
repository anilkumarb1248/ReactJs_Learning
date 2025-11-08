
import React from 'react'

function ListRenderDemo() {
    const names = ['Anil', 'Manasvi', 'Hithiksha', 'Shreetan', 'Anil']
    // const nameList = names.map(name => <h2 key={name}>{name} </h2>);
    const nameList = names.map((name, index) => <h2 key={index}>{name} </h2>);
    return (
        <div>
            {nameList}
            {/* {
            names.map(name => <h2>{name} </h2>)
        } */}

            {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2> */}
        </div>
    )
}
export default ListRenderDemo;
