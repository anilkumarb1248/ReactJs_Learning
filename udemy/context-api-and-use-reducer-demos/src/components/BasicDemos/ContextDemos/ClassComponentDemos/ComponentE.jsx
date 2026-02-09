import React, { Component } from "react";
import UserContext, { UserConsumer } from "../UserContext";
import { ThemeConsumer } from "../ThemeContext";

export class ComponentE extends Component {
  render() {
    return (
      <div>
        <h4>3) ****** Component E</h4>
        <p>Reading multiple context values like username and theme</p>
        <UserConsumer>
          {(userName) => (
            <ThemeConsumer>
              {(theme) => {
                return (
                  <p>
                    UserName:
                    <strong style={{ color: "red" }}>{userName}</strong>, Theme:
                    <strong style={{ color: "red" }}>{theme}</strong>
                  </p>
                );
              }}
            </ThemeConsumer>
          )}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentE;
