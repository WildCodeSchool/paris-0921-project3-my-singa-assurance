import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SubscriberPage from './components/SubscriberPage';
import FormSignUp from './components/FormSignUp';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormSignUp />} />
        <Route path="/subscribers" element={<SubscriberPage />} />
      </Routes>
    </>
  );
}

export default App;
