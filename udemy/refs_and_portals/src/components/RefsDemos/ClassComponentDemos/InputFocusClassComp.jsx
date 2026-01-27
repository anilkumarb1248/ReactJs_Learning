import React, { Component } from "react";

export class InputFocusClassComp extends Component {
  constructor(props) {
    super(props);
    this.usernameInputRef = React.createRef(); // Creating a ref object
    console.log("Username Ref inside constructor");
    console.log(this.usernameInputRef);
    this.pwdInputRef = React.createRef();
  }

  componentDidMount() {
    this.usernameInputRef.current.focus(); // Accessing the ref and focusing input username
    this.usernameInputRef.current.value = "Anil"; // To set the value
    this.pwdInputRef.current.value = "Password@123";
    console.log("Username Ref inside componentDidMount");
    console.log(this.usernameInputRef);
  }

  loginFormSubmit = () => {
    alert(
      `Username: ${this.usernameInputRef.current.value}, Password: ${this.pwdInputRef.current.value} `,
    );
  };

  render() {
    return (
      <div>
        <h3> Welcome to React Refs Learning </h3>
        <p>
          <label htmlFor="Username">Username: </label>
          <input type="text" id="Username" ref={this.usernameInputRef} />
        </p>
        <p>
          <label htmlFor="Password">Password: </label>
          <input type="password" id="Password" ref={this.pwdInputRef} />
        </p>
        <p>
          <button onClick={this.loginFormSubmit}>Login</button>
          <button style={{ marginLeft: "10px" }}>Register</button>
        </p>
      </div>
    );
  }
}

export default InputFocusClassComp;
