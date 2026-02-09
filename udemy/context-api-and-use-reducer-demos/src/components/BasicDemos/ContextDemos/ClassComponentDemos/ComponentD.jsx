import UserContext from "../UserContext";
import React, { Component } from "react";

class ComponentD extends Component {
  render() {
    return (
      <div>
        <h4> 2) ****** Component D</h4>
        <p>
          Reading the username value with contextType property in{" "}
          <strong> Component D</strong>
        </p>
        <p>
          It will only work in Class components and we can only access one
          context with contextType propery
        </p>
        <p>
          Hello <strong style={{ color: "red" }}>{this.context} </strong> in
          Component D
        </p>
      </div>
    );
  }
}

ComponentD.contextType = UserContext;
export default ComponentD;
