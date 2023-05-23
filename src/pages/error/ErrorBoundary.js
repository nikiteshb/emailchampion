import React, { Component } from "react";
import NotFound from "./NotFound";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    this.setState({ hasError: true });
  }

  render() {
      if (this.state.hasError) {
        // console.log("bada error" ,this.state.hasError);
        return <NotFound />
      }

      return this.props.children;
  }
}

export default ErrorBoundary;