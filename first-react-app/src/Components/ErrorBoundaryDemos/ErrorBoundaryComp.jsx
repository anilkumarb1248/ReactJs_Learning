
import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // 1. Used to render a fallback UI after an error is thrown
    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
        return { hasError: true }
    }

    // 2. Used to log error information
    componentDidCatch(error, errorInfo) {
        // We can also log the error to an error reporting service
        console.error("ErrorBoundaryComp caught an error:", error, errorInfo);
        // Example of logging to a service: logErrorToService(error, errorInfo);
    }


    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h4 style={{color:'red'}}> Something went wrong. Please refresh the page or try again later.</h4>;
        }
        return this.props.children;
    }
}

export default ErrorBoundaryComp;
