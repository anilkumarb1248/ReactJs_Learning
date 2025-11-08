

import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';
import UserMemoComp from './UserMemoComp';

export class ContainerComp extends Component {
    // export class ContainerComp extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { name: 'Anil', user: { name: 'Anil', age: 35 } }
        this.counter = 1;
    }

    componentDidMount() {
        setInterval(() => {
            let counter = this.counter + 1;
            this.counter = counter;
            console.log("---- setInterval called after 3 seconds ----- ")
            // this.setState({ name: 'Anil' })
            this.setState({ user: { name: 'Anil', age: 35 } })
            // this.setState({user: {name: 'Anil' + counter, age: 35}})
        }, 3000);
    }

    render() {
        console.log("Container Component is rendering with user: {" + this.state.user.name + ", " + this.state.user.age + "}")
        return (
            <div>
                <h2> Container Component </h2>
                {/* <PureComp name={this.state.name} />
                <RegularComp name={this.state.name} /> */}
                {/* <MemoComp/> */}
                <UserMemoComp user={this.state.user} />
            </div>
        )
    }
}

export default ContainerComp;
