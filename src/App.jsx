import React from 'react';
import Header from './components/Header';

import './App.css';
import HomepagePresentation from './components/HomepagePresentation';
import HomepageTarif from './components/HomepageTarif';
import HomepageConcept from './components/HomepageConcept';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HomepagePresentation />
      <HomepageTarif />
      <HomepageConcept />
      <Footer />
    </>
  );
}

export default App;
