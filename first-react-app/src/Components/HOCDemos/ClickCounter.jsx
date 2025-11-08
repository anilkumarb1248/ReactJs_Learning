
import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         counter: 0
    //     }
    // }

    // increamentCounter = () => {
    //     this.setState(prevState => {
    //         return { counter: prevState.counter + 1 }
    //     })
    // }

    render() {
        const {counter, increamentCounter} = this.props;
        return (
            <div>
                <button onClick={increamentCounter}>{this.props.name} Clicked {counter} times </button>

            </div>
        )
    }
}

// export default UpdatedComponent(ClickCounter);
export default withCounter(ClickCounter, 5);
