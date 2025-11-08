
import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class HOCDemos extends Component {
    render() {
        return (
            <div>
                <ClickCounter name='Anil'/>
                <HoverCounter />
            </div>
        )
    }
}

export default HOCDemos;
