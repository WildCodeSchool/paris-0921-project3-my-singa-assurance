import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OfferRateCard from './OfferRateCard';
import portrait from '../assets/portraitRecipient.png';

import style from './style/OfferRate.module.scss';

function OfferRate() {
  const [formule, setFormule] = useState('');

  useEffect(async () => {
    const res = await axios.get('http://localhost:8081/options');
    const result = res.data;
    setFormule(result);
  }, []);

  return (
    <div className={style.mapContainer}>
      <div className={style.RecipientLocationTitle}>
        <div className={style.RecipientLocationMainPortrait}>
          <img src={portrait} alt="user" className={style.RecipientLocationPortrait} />
        </div>
        <div className={style.RecipientLocationTextTitle}>
          <h3 className={style.RecipientLocationPresentation}>Voici les formules que nous proposons pour vos proches</h3>
        </div>
      </div>
      <div className={style.ratesMainContainer}>
        {formule &&
          formule.map((element) => {
            return <OfferRateCard key={element} formule={element.formule_name} price={element.formule_details} />;
          })}
      </div>
    </div>
  );
}

export default OfferRate;
