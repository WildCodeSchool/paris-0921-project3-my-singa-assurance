import React from 'react';

import Header from './Header';
import HomepagePresentation from './HomepagePresentation';
import HomepageTarif from './HomepageTarif';
import HomepageConcept from './HomepageConcept';
import Footer from './Footer';

function Homepage() {
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

export default Homepage;
