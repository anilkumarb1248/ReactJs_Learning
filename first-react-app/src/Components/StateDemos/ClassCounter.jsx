import { Component } from "react";

class ClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 };  // initialize state
    }

    increaseCount = () => {
        // this.setState(
        //     { count: this.state.count + 1 },
        //     ()=> {
        //         console.log("Count: " + this.state.count);
        //     });

        this.setState((prevState, props) => ({
            count : prevState.count + 1
        }))
        // this.state.count = this.state.count + 1;
    }

    increaseFiveTimes = () => {
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increaseFiveTimes}> Increase Count </button>
            </div>
        );
    }
}

export default ClassCounter;



