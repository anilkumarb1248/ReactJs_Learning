
import React, { Component } from 'react'
import ChildB from './ChildB';
import ChildA from './ChildA';

class Parent extends Component {

    constructor(props) {
        super(props)
        this.state = { child: 'ChildA' }
    }

    handleUpdateChild = () => {
        let child = this.state.child == 'ChildA' ? 'ChildB' : 'ChildA';
        this.setState({child : child})
    }
    
    render() {
        let child = this.state.child == "ChildA" ? <ChildA /> : <ChildB />
        return (
            <div>
                {child}
                <button onClick={this.handleUpdateChild}>Update Child</button>
            </div>
        )
    }
}

export default Parent;
