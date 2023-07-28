import React from 'react';
import ErrorPage from './ErrorPage';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.log('error', error);
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log('catched UI Error', error, info);
  }
  render() {
    if (this.state.hasError) return <ErrorPage />;
    return this.props.children;
  }
}

export default ErrorBoundary;