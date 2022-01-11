import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SubscriberPage from './components/SubscriberPage';
import FormSignUp from './components/FormSignUp';
import SubscriberWelcomePage from './components/SubscriberWelcomePage';
import SubscriberHasRecipients from './components/SubscriberHasRecipients';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormSignUp />} />
        <Route path="/subscribers" element={<SubscriberPage />}>
          <Route path="welcome" element={<SubscriberWelcomePage />} />
          <Route path="recipients" element={<SubscriberHasRecipients />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
