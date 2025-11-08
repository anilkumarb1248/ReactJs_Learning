
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Hithiksha' }
        console.log("constructor() in LifeCycle B");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps() in LifeCycle B");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount() in LifeCycle B");
    }

        shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate() in LifeCycle B");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate() in LifeCycle B");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate() in LifeCycle B");
    }

    render() {
        console.log("render() in LifeCycle B");
        return (
            <div>
                <h2>LifeCycle B rendered</h2>
            </div>
        )
    }
}

export default LifeCycleB;
