import React from 'react';

import SubscriberLeftNavBar from './SubscriberLeftNavBar';
import SubscriberRightMainContainer from './SubscriberRightMainContainer';

import style from './style/SubscriberContainer.module.scss';

function SubscriberContainer() {
  return (
    <div className={style.subscriberDownContainer}>
      <SubscriberLeftNavBar />
      <SubscriberRightMainContainer />
    </div>
  );
}

export default SubscriberContainer;
