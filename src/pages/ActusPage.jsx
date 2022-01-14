import React from 'react';

import Header from '../components/Header';
import Actus from '../components/Actus';

import style from './style/ActusPage.module.scss';

function ActusPage() {
  return (
    <div className={style.actusPageWrapper}>
      <Header />
      <Actus />
    </div>
  );
}

export default ActusPage;
