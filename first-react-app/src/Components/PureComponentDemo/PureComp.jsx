
import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("***** Pure Component rendered *****")
        return (
            <div>
                <h3> Pure Component : {this.props.name}</h3>
            </div>
        )
    }
}

export default PureComp;
