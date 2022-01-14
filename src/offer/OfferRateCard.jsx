import React from 'react';

import style from './style/OfferRateCard.module.scss';

function OfferRateCard({ formule, price }) {
  const juniorCount = localStorage.getItem('JuniorCount');
  const adultCount = localStorage.getItem('AdultCount');
  const seniorCount = localStorage.getItem('SeniorCount');

  const arrayCount = [Number(juniorCount), Number(adultCount), Number(seniorCount)];
  const reducer = (a, b) => a + b;

  const resultCount = arrayCount.reduce(reducer);

  const pricePerMonth = resultCount * price;

  return (
    <div className={style.ratesMainWrapContainer}>
      <div> Singa {formule}</div>
      <div> {resultCount} proches couverts</div>
      <div>{pricePerMonth} € / mois</div>
      <div>Couverture des frais à 80%</div>
      <div>Buttons</div>
    </div>
  );
}

export default OfferRateCard;
