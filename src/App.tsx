import * as React from 'react';
import './style.css';
import ErrorBoundary from './modules/ErrorBoundary/ErrorBoundary';
import ErrorComponent from './modules/ErrorBoundary/ErrorComponent';

export default function App() {
  return (
    <ErrorBoundary fallback={'loading'}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <ErrorComponent />
      </div>
    </ErrorBoundary>
  );
}
