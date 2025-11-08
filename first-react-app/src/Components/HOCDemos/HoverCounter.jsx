
import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

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
                <h3 onMouseOver={increamentCounter}>Hoverd {counter} times </h3>
            </div>
        )
    }
}

// export default UpdatedComponent(HoverCounter);
export default withCounter(HoverCounter, 10);
