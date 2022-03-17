import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SafeContextProvider } from './contexts/SafeContext';
import SafeProvider from '@gnosis.pm/safe-apps-react-sdk';

ReactDOM.render(

  <React.StrictMode>
    <SafeProvider>
      <SafeContextProvider>
        <App />
      </SafeContextProvider>
    </SafeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
