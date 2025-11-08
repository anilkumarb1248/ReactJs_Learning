
import React, { Component } from 'react'
import InputChild from './InputChild';

class FocusInputParent extends Component {

  constructor(props) {
    super(props)
    this.childComponentRef = React.createRef()
  }


  focusInput = () => {
    this.childComponentRef.current.focusInputInChild();
  }
  render() {
    return (
      <div>
        <h2> Focus Child Input from Parent Demo </h2>
        <p>
          <b>Button in Parent: </b>
          <button onClick={this.focusInput}>Focus Input in Child </button>
        </p>
        <hr />
        <InputChild ref={this.childComponentRef} />
      </div>
    )
  }
}

export default FocusInputParent;
