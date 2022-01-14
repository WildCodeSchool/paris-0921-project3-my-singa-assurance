import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './style/FormPage.module.scss';

function FormPage() {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  );
}

export default FormPage;
