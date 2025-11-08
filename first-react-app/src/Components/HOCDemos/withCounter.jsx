import { Component } from "react"

// The HOC function: It accepts a component
// const UpdatedComponent = (WrappedComponent) => {
// const withCounter = (WrappedComponent) => {
const withCounter = (WrappedComponent, increamentValue) => {
    // The Wrapper Component: This is the new component returned by the HOC
    // class NewComponent extends Component {
    class WithComponent extends Component {

        // Add shared logic (e.g., counting, logging lifecycle events)
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        increamentCounter = () => {
            this.setState(prevState => {
                // return { counter: prevState.counter + 1 }
                return { counter: prevState.counter + increamentValue }
                
            })
        }

        render() {
            // return <WrappedComponent counter={this.state.counter} increamentCounter={this.increamentCounter} />
            // Render the original component, passing all props through
            return <WrappedComponent
                counter={this.state.counter}
                increamentCounter={this.increamentCounter}
                {...this.props}
            />

        }
    }
    // return NewComponent;
    return WithComponent;
}

// export default UpdatedComponent;
export default withCounter;