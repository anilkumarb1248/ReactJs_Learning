import { Component } from "react";


class MyClassComponent extends Component {

    constructor(props){
        super(props);  // must be called first

        this.state = { // Initializing state & Set up initial data before rendering
            count: 1
        };

        // Binding event handler methods
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return (
            <>
                <h2>Welcome to React Class Component</h2>
                <h4> Count: {this.state.count} </h4>
                <button onClick={this.handleBtnClick}>Increament</button>
            </>
        )
    }

}

export default MyClassComponent;