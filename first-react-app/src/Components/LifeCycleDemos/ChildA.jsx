

import React, { Component } from 'react'

export class ChildA extends Component {

    componentWillUnmount() {
        console.log("ChildA is destroying");
    }
    
    render() {
        return (
            <div>
                <h2> Child A Component </h2>
            </div>
        )
    }
}

export default ChildA
