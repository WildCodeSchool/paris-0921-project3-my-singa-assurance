import React, { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import style from './style/OfferRateCard.module.scss';

function OfferRateCard({ formule, price }) {
  const juniorCount = localStorage.getItem('JuniorCount');
  const adultCount = localStorage.getItem('AdultCount');
  const seniorCount = localStorage.getItem('SeniorCount');

  const arrayCount = [Number(juniorCount), Number(adultCount), Number(seniorCount)];
  const reducer = (a, b) => a + b;

  const resultCount = arrayCount.reduce(reducer);

  const pricePerMonth = resultCount * price;

  const [borderStyle, setBorderStyle] = useState();
  const [display, setDisplay] = useState();

  const HandleStyleModif = () => {
    borderStyle ? setBorderStyle() : setBorderStyle({ border: 'solid 3px #2ad63e' });
    display ? setDisplay() : setDisplay({ visibility: 'visible' });
  };

  return (
    <div className={style.ratesMainWrapContainer} onClick={HandleStyleModif} style={borderStyle}>
      <div className={style.formuleType}>
        Singa {formule} <CheckCircleIcon className={style.checkBox} style={display} />
      </div>
      <div className={style.formuleCount}>
        <div className={style.count}>{resultCount} proches couverts</div>
        <div>Modifier</div>
      </div>
      <div className={style.formulePrice}>
        <div className={style.price}>
          <div className={style.pricePerMonth}>{pricePerMonth} € </div>
          <div>/ mois</div>
        </div>
        <div className={style.commitment}>sur un an d&apos;engagement</div>
      </div>
      <div className={style.formuleConditions}>Couverture des frais à 80%</div>
    </div>
  );
}

export default OfferRateCard;
