

import React, { Component } from 'react'

export class ChildB extends Component {
    componentWillUnmount() {
        console.log("ChildB is destroying");
    }

    render() {
        return (
            <div>
                <h2> Child B Component </h2>
            </div>
        )
    }
}

export default ChildB
