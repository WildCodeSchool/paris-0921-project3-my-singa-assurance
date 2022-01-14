import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthenticationContextProvider } from './context/AuthenticationContext';
import { SubscriberInfoContextProvider } from './context/SubscriberInfoContext';

ReactDOM.render(
  <BrowserRouter>
    <SubscriberInfoContextProvider>
      <AuthenticationContextProvider>
        <App />
      </AuthenticationContextProvider>
    </SubscriberInfoContextProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
