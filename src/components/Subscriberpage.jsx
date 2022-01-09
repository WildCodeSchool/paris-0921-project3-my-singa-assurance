import React from 'react';

import SubscriberHeader from './SubscriberHeader';
import SubscriberWelcomePage from './SubscriberWelcomePage';
import SubscriberLeftNavBar from './SubscriberLeftNavBar';

function SubscriberPage() {
  return (
    <>
      <SubscriberHeader />
      <SubscriberLeftNavBar />
      <SubscriberWelcomePage />
    </>
  );
}

export default SubscriberPage;
