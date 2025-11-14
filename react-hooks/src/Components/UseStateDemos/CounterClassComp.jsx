
import React, { Component } from 'react'

class CounterClassComp extends Component {

  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  increamentCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.increamentCount}> Class Comp Count: {this.state.count} </button>
      </div>
    )
  }
}

export default CounterClassComp;
