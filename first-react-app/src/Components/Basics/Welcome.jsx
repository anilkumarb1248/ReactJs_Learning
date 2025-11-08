// Class Component Example

import { Component } from "react";

class Welcome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message : 'Hello'
        }

        this.changeMessageHandler = this.changeMessageHandler.bind(this)
    }

    // changeMessageHandler(){
    //     this.setState({
    //         message: this.state.message == 'Hello' ? 'Hi' : 'Hello'
    //     })
    // }

    changeMessageHandler(){
        this.setState( prevState => ({
            message: prevState.message == 'Hello' ? 'Hi' : 'Hello'
        }))
    }

    render() {
        return (
            <>
                <h2> {this.state.message} {this.props.name}, Welcome to {this.props.company} company</h2>
                <button onClick={this.changeMessageHandler}>Change Message</button>
            </>
        );
    }
}

export default Welcome;