
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Anil' }
        console.log("constructor() in LifeCycle A");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps() in LifeCycle A");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount() in LifeCycle A");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate() in LifeCycle A");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate() in LifeCycle A");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate() in LifeCycle A");
    }

    handleUpdateName = ()=>{
        this.setState({name:'Bandari'})
    }

    render() {
        console.log("render() in LifeCycle A");
        return (
            <div>
                <h2>LifeCycle A rendered : {this.state.name} </h2>
                <button onClick={this.handleUpdateName}> Update Name </button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;
