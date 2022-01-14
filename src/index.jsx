import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthenticationContextProvider } from './context/AuthenticationContext';
import { SubscriberInfoContextProvider } from './context/SubscriberInfoContext';

import App from './App';

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
