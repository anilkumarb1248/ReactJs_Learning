
import React, { Component } from 'react'

export class CallbackRefsDemo extends Component {

    constructor(props) {
        super(props)
        // Create an attribute to store the dom element, for access across component
        this.inputRef = null;

        // Create a callback ref arrow function and attach it to a property
        this.setInputCallbackRef = (domElement) => {
            this.inputRef = domElement;
        };
    }

    componentDidMount() {
        if (this.inputRef) {
            this.inputRef.focus()
        }
    }

    handleInput = () => {
        if (this.inputRef) {
            alert(this.inputRef.value)
        }
    }


    render() {
        return (
            <div>
                <h3> Callback Refs Demo </h3>
                <input type="text" ref={this.setInputCallbackRef} />
                <button onClick={this.handleInput}>Login</button>
            </div>
        )
    }
}

export default CallbackRefsDemo;
