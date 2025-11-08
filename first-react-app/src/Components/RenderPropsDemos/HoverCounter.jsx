
import React, { Component } from 'react'

class HoverCounter extends Component {

    render() {
        const {counter, increamentCounter} = this.props;
        return (
            <div>
                <h3 onMouseOver={increamentCounter}> Hoverd {counter} times </h3>
            </div>
        )
    }
}

export default HoverCounter;
