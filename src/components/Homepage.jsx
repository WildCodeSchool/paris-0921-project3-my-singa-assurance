import React from 'react';

import HomepagePresentation from './HomepagePresentation';
import HomepageTarif from './HomepageTarif';
import HomepageConcept from './HomepageConcept';

function Homepage() {
  return (
    <>
      <HomepagePresentation />
      <HomepageTarif />
      <HomepageConcept />
    </>
  );
}

export default Homepage;
