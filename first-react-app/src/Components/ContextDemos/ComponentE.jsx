
import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                <h4> Component E </h4>
                Hello {this.context} in Component E
                <hr />
                <ComponentF />
            </div>
        )
    }
}
// ComponentE.contextType = UserContext;
export default ComponentE;
