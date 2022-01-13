import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

function OfferPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default OfferPage;
