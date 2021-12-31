import React from 'react';
import Header from './components/Header';

import './App.css';
import HomepagePresentation from './components/HomepagePresentation';
import HomepageConcept from './components/HomepageConcept';

function App() {
  return (
    <>
      <Header />
      <HomepagePresentation />
      <HomepageConcept />
    </>
  );
}

export default App;
