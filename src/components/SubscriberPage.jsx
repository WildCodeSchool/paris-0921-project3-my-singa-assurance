import React from 'react';
import { Outlet } from 'react-router-dom';

import SubscriberHeader from './SubscriberHeader';
import SubscriberLeftNavBar from './SubscriberLeftNavBar';

import style from './style/Subscriberpage.module.scss';

function SubscriberPage() {
  return (
    <div className={style.subscriberMainContainer}>
      <SubscriberHeader />
      <div className={style.downMainContainer}>
        <SubscriberLeftNavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default SubscriberPage;
