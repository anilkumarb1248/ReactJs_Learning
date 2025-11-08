
import React, { Component } from 'react'
import User from './User';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Counter from './Counter';

class RenderPropsDemos extends Component {

    // renderPropFun = (isLoggedIn) => {
    //     if(isLoggedIn)
    //         return 'Anil'
    //     else
    //         return 'Guest'
    // }

    render() {
        return (
            <div>
                {/* <User render={(isLoggedIn) => isLoggedIn ? "Anil" : "Guest"} />  */}
                {/* /* <User render={this.renderPropFun} /> */}
                {/* <ClickCounter/>
                <HoverCounter/> */}

                {/* <Counter render={(counter, increamentCounter) => (
                    <ClickCounter counter={counter} increamentCounter={increamentCounter} />
                )} />
                <Counter render={(counter, increamentCounter) => (
                    <HoverCounter counter={counter} increamentCounter={increamentCounter} />
                )} /> */}

                <Counter>
                    {(counter, increamentCounter) => (
                        <ClickCounter counter={counter} increamentCounter={increamentCounter} />
                    )}
                </Counter>
                <Counter>
                    {(counter, increamentCounter) => (
                        <HoverCounter counter={counter} increamentCounter={increamentCounter} />
                    )}
                </Counter>
            </div>
        )
    }
}

export default RenderPropsDemos;
