import React from 'react';

import SubscriberHeader from './SubscriberHeader';
import SubscriberContainer from './SubscriberContainer';

import style from './style/Subscriberpage.module.scss';

function SubscriberPage() {
  return (
    <div className={style.subscriberMainContainer}>
      <SubscriberHeader />
      <SubscriberContainer />
    </div>
  );
}

export default SubscriberPage;
