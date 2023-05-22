import React, { Component } from "react";
import NotFound from "./NotFound";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedFromError(props, state) {
    return { hasError: true };
  }

  render() {
    {
      if (this.state.hasError) {
        return <NotFound status="OOPS" error="Something went wrong" />;
      }

      return this.props.children;
    }
  }
}

export default ErrorBoundary;