
import React, { Component } from 'react'

class ClickCounter extends Component {
    render() {
        const {counter, increamentCounter} = this.props;
        return (
            <div>
                <button onClick={increamentCounter}> Clicked {counter} times </button>

            </div>
        )
    }
}
export default ClickCounter;
