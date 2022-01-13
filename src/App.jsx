import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import ActusPage from './components/ActusPage';
import SubscriberPage from './components/SubscriberPage';
import SubscriberWelcomePage from './components/SubscriberWelcomePage';
import FormPage from './pages/FormPage';
import FormSignUpStep1 from './formSignUp/FormSignUpStep1';
import FormSignUpStep2 from './formSignUp/FormSignUpStep2';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/actus" element={<ActusPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormPage />}>
          <Route path="step1" element={<FormSignUpStep1 />} />
          <Route path="step2" element={<FormSignUpStep2 />} />
        </Route>
        <Route path="/subscribers" element={<SubscriberPage />} />
        <Route path="/welcome" element={<SubscriberWelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
