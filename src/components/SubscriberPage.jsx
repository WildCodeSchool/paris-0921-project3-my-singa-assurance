import React from 'react';
import { Outlet } from 'react-router-dom';

import SubscriberHeader from './SubscriberHeader';
import SubscriberLeftNavBar from './SubscriberLeftNavBar';
// import SubscriberWelcomePage from './SubscriberWelcomePage';
// import SubscriberHasRecipients from './SubscriberHasRecipients';

import style from './style/Subscriberpage.module.scss';

function SubscriberPage() {
  return (
    <div className={style.subscriberMainContainer}>
      <SubscriberHeader />
      <SubscriberLeftNavBar />
      <Outlet />
    </div>
  );
}

export default SubscriberPage;
