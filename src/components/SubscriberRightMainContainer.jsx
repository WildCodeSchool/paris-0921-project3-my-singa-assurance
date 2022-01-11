import React from 'react';

import SubscriberWelcomePage from './SubscriberWelcomePage';
import SubscriberHasRecipients from './SubscriberHasRecipients';

import style from './style/SubscriberRightMainContainer.module.scss';

function SubscriberRightMainContainer() {
  return (
    <div className={style.subscriberRightMainContainer}>
      <SubscriberWelcomePage />
      <SubscriberHasRecipients />
    </div>
  );
}

export default SubscriberRightMainContainer;
