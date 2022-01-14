import React from 'react';

import Header from './Header';
import HomepagePresentation from './HomepagePresentation';
import HomepageTarif from './HomepageTarif';
import HomepageConcept from './HomepageConcept';
import Footer from './Footer';
import ContactPage from './ContactPage';

function Homepage() {
  return (
    <>
      <Header />
      <HomepagePresentation />
      <HomepageTarif />
      <HomepageConcept />
      <ContactPage />
      <Footer />
    </>
  );
}

export default Homepage;
