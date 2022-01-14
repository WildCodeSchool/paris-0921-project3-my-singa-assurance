import React from 'react';
import { Outlet } from 'react-router-dom';

import SubscriberHeader from '../subscriber/SubscriberHeader';
import SubscriberLeftNavBar from '../subscriber/SubscriberLeftNavBar';

import style from './style/SubscriberPage.module.scss';

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
