import React from 'react';
import Error from './Error.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error message={'Something went wrong.'}/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
