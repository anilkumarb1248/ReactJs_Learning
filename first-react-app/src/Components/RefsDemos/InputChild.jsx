
import React, { Component } from 'react'

class InputChild extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    focusInputInChild() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <p>
                    <b>Input in Child: </b>
                    <input type="text" ref={this.inputRef} />
                </p>
            </div>
        )
    }
}

export default InputChild;
