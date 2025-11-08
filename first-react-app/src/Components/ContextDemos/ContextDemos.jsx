
import React, { Component } from 'react'
import ComponentC from './ComponentC';
import { UserProvider } from './UserContext';

class ContextDemos extends Component {
    render() {
        return (
            <div>
                <h2> Context API Demos </h2>
                <UserProvider value="Anil">
                    <ComponentC />
                </UserProvider>
            </div>
        )
    }
}
export default ContextDemos;
