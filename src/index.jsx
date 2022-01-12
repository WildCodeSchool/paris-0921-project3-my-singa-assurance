import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SubscriberInfoContextProvider } from './context/SubscriberInfoContext';

ReactDOM.render(
  <BrowserRouter>
    <SubscriberInfoContextProvider>
      <App />
    </SubscriberInfoContextProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
