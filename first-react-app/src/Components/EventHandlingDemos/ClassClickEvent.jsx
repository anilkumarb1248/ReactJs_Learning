
import React, { Component } from 'react'

export class ClassClickEvent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         buttonText: "Click Me"
      }
    }

    hadleBtnClick = ()=> {
        console.log("Button clicked in class component");
        this.setState({ buttonText: "Button Clicked!"})
    }
    
  render() {
    return (
      <div>
            <button onClick={this.hadleBtnClick}> {this.state.buttonText} (Class Component)</button>
      </div>
    )
  }
}

export default ClassClickEvent;
