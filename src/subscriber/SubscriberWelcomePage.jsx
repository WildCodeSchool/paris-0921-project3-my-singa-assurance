import React, { useContext } from 'react';

import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/SubscriberWelcomePage.module.scss';

function SubscriberWelcomePage() {
  const { decodedToken } = useContext(SubscriberInfoContext);

  return (
    <div className={style.mainContainerSubscriberWelcomePage}>
      <div className={style.titleContainer}>
        <h1>BONJOUR {decodedToken.firstName}</h1>
      </div>
    </div>
  );
}

export default SubscriberWelcomePage;
