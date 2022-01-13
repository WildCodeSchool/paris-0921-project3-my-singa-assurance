import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './style/FormPage.module.scss';

function FormPage() {
  return (
    <div className={style.container}>
      <p className={style.title}>Faisons plus ample connaissance</p>
      <Outlet />
    </div>
  );
}

export default FormPage;
