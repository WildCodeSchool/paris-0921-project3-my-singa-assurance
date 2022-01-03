import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
