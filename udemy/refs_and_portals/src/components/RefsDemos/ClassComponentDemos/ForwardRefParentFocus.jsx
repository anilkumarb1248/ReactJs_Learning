import React, { Component } from "react";
import ForwardRefChildInput from "./ForwardRefChildInput";

class ForwardRefParentFocus extends Component {
  constructor(props) {
    super(props);
    this.forwardingRef = React.createRef();
  }

  handlBtnClick = () => {
    if (this.forwardingRef && this.forwardingRef.current) {
      this.forwardingRef.current.focus();
    }
  };

  render() {
    return (
      <div>
        <h2>Parent Comp which focuses on Child Comp Input by forwarding Ref</h2>
        <p>
          Parent Component{" "}
          <button onClick={this.handlBtnClick}>Focus Child Input </button>
        </p>
        <ForwardRefChildInput ref={this.forwardingRef} />
      </div>
    );
  }
}
export default ForwardRefParentFocus;
