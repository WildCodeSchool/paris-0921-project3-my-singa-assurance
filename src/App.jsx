import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Offer from './components/Offer';
import OfferRate from './components/OfferRate';
import ActusPage from './components/ActusPage';
import SubscriberPage from './components/SubscriberPage';
import FormSignUp from './components/FormSignUp';
import SubscriberWelcomePage from './components/SubscriberWelcomePage';
import SubscriberHasRecipients from './components/SubscriberHasRecipients';
import RecipientLocation from './components/RecipientLocation';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actus" element={<ActusPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormSignUp />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/rates" element={<OfferRate />} />
        <Route path="/subscribers" element={<SubscriberPage />}>
          <Route path="welcome" element={<SubscriberWelcomePage />} />
          <Route path="recipients" element={<SubscriberHasRecipients />} />
        </Route>
        <Route path="/recipientLocation" element={<RecipientLocation />} />
      </Routes>
    </>
  );
}

export default App;
