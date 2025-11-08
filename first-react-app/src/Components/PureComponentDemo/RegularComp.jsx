
import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log("***** Regular Component rendered *****")
        return (
            <div>
                <h3> Regualr Component : {this.props.name} </h3>
            </div>
        )
    }
}

export default RegularComp;
