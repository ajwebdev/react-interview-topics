import * as React from 'react';
import './style.css';
import ErrorBoundary from './modules/ErrorBoundary/ErrorBoundary';
import ErrorComponent from './modules/ErrorBoundary/ErrorComponent';
// import PortalExample from './modules/portal/PortalExample';
import ClickIncrease from './modules/hoc/ClickIncrease';
import HoverIncrease from './modules/hoc/HoverIncrease';

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <ErrorComponent />
        <ClickIncrease />
        {/* <HoverIncrease /> */}
      </div>

      {/* <PortalExample /> */}
    </ErrorBoundary>
  );
}
