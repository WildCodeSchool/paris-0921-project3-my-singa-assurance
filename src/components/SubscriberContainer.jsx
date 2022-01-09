import React from 'react';

import SubscriberLeftNavBar from './SubscriberLeftNavBar';
import SubscriberWelcomePage from './SubscriberWelcomePage';

import style from './style/SubscriberContainer.module.scss';

function SubscriberContainer() {
  return (
    <div className={style.subscriberDownContainer}>
      <SubscriberLeftNavBar />
      <SubscriberWelcomePage />
    </div>
  );
}

export default SubscriberContainer;
