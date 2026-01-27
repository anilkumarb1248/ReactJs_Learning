import React, { Component } from "react";

export class ShowTimer extends Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
  }

  componentDidMount() {
    setInterval(() => {
      this.timerRef.current.value = new Date().toLocaleTimeString();
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Showing Time with Refs without re-rendering the component </h2>
        <label htmlFor="Timer">Time: </label>{" "}
        <span>
          <input type="text" id="Timer" ref={this.timerRef} />
        </span>
      </div>
    );
  }
}

export default ShowTimer;
