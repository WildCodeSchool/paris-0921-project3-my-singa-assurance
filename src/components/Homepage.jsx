import React from 'react';

import HomepagePresentation from './HomepagePresentation';
import HomepageTarif from './HomepageTarif';
import HomepageConcept from './HomepageConcept';
import Footer from './Footer';

function Homepage() {
  return (
    <>
      <HomepagePresentation />
      <HomepageTarif />
      <HomepageConcept />
      <Footer />
    </>
  );
}

export default Homepage;
