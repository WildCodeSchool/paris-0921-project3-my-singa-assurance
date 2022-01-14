import React from 'react';

import Header from './Header';
import ActusPage from './ActusPage';

import style from './style/ActusPage.module.scss';

function ActusMainPage() {
  return (
    <div className={style.actusPageWrapper}>
      <Header />
      <ActusPage />
    </div>
  );
}

export default ActusMainPage;
