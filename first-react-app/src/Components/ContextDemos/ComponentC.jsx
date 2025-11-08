
import React, { Component } from 'react'
import ComponentE from './ComponentE';

class ComponentC extends Component {
    render() {
        return (
            <div>
                <h3> Component C </h3>
                <hr />
                <ComponentE />
            </div>
        )
    }
}
export default ComponentC;
