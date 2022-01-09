import React from 'react';

import SubscriberLeftNavBar from './SubscriberLeftNavBar';
import SubscriberWelcomePage from './SubscriberWelcomePage';
import SubscriberHasRecipients from './SubscriberHasRecipients';

import style from './style/SubscriberContainer.module.scss';

function SubscriberContainer() {
  return (
    <div className={style.subscriberDownContainer}>
      <SubscriberLeftNavBar />
      <SubscriberWelcomePage />
      <SubscriberHasRecipients />
    </div>
  );
}

export default SubscriberContainer;
