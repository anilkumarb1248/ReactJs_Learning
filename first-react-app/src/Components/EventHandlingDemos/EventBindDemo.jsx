
import React, { Component } from 'react'

export class EventBindDemo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(){
    //     console.log("this: ", this);
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    // }

    handleClick = () => {
        console.log("this: ", this);
        this.setState({
            message: "Good Bye!"
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message} </h3>
                <button onClick={this.handleClick}> Click Me! </button>
                {/* 1) Creating a new bound function on every render */}
                {/* <button onClick={this.handleClick.bind(this)}> Click Me! </button> */}

                {/* 2)	Using an Arrow Function in the Render Method (Inline) */}
                {/* <button onClick={() => this.handleClick()}> Click Me! </button> */}
            </div>
        )
    }
}

export default EventBindDemo;
