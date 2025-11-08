
import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
    render() {
        return (
            <div>
                <h5> Component F </h5>
                <UserConsumer>
                    {
                        (username) => {
                            return <p> Hello {username} </p>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}
export default ComponentF;
