import React from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';

import HomepageTarif from './components/HomepageTarif';
import HomepageConcept from './components/HomepageConcept';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <HomepageTarif />
      <HomepageConcept />
    </>
  );
}

export default App;
