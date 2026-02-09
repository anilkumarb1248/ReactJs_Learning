import { UserConsumer } from "../UserContext";
import React, { Component } from "react";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <h4> 1) ****** ComponentC</h4>
        <UserConsumer>
          {(value) => {
            return (
              <p>
                User Name in Component C:
                <strong style={{ color: "red" }}> {value} </strong>
              </p>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
