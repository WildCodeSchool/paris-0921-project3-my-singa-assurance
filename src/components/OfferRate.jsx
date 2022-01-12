import React, { useState, useEffect } from 'react';
import axios from 'axios';

import style from './style/OfferRate.module.scss';

function OfferRate() {
  const juniorCount = localStorage.getItem('JuniorCount');
  const adultCount = localStorage.getItem('AdultCount');
  const seniorCount = localStorage.getItem('SeniorCount');

  const arrayCount = [Number(juniorCount), Number(adultCount), Number(seniorCount)];
  const reducer = (a, b) => a + b;

  let resultCount = arrayCount.reduce(reducer);

  const [formule, setFormule] = useState('');

  useEffect(async () => {
    const res = await axios.get('http://localhost:8081/options');
    const result = res.data;
    setFormule(result);
  });

  return (
    <div className={style.cardContainer}>
      <div> Singa {formule}</div>
      <div> {resultCount} proches couverts</div>
      <div>XXX € / mois</div>
      <div>Couverture des frais à 80%</div>
      <div>Buttons</div>
    </div>
  );
}

export default OfferRate;
