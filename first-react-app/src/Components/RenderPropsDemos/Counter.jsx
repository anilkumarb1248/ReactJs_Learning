
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }

    increamentCounter = () => {
        console.log("IncreamentCounter called")
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
    render() {
        return (
            <div>
                {/* {this.props.render(this.state.counter, this.increamentCounter)} */}
                {this.props.children(this.state.counter, this.increamentCounter)}
            </div>
        )
    }
}

export default Counter;
