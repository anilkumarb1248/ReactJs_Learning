
import React, { Component } from 'react'

export class InputFocusClassComp extends Component {

    constructor(props) {
        super(props)
        this.usernameInputRef = React.createRef(); // Creating a ref object
    }

    componentDidMount() {
        this.usernameInputRef.current.focus(); // Accessing the ref and focusing input username
    }

    loginFormSubmit = ()=>{
        alert(this.usernameInputRef.current.value)
    }

    render() {
        return (
            <div>
                <h3> Welcome to React Refs Learning </h3>
                <p> <label>Username: </label> <input type="text" ref={this.usernameInputRef} /> </p>
                <p> <label>Password: </label> <input type="password" /> </p>
                <p> <button onClick={this.loginFormSubmit}>Login</button> <button>Register</button> </p>
            </div>
        )
    }
}

export default InputFocusClassComp;
