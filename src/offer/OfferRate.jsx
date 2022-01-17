import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getOptionsInfo } from '../services/axios.service';
import OfferRateCard from './OfferRateCard';
import portrait from '../assets/portraitRecipient.png';

import style from './style/OfferRate.module.scss';

function OfferRate() {
  const [formule, setFormule] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    const getData = async () => {
      const res = await getOptionsInfo();
      return res.data;
    };
    const result = await getData();
    setFormule(result);
  }, []);

  const handleGoToSubscribtion = () => {
    navigate('/createaccount/step1');
  };

  return (
    <div className={style.mapContainer}>
      <div className={style.RecipientLocationTitle}>
        <button className={style.RecipientLocationButton}>
          <div className={style.returnButtonOfferRate}>Retour</div>
        </button>
        <div className={style.mainTitleOfferRate}>
          <div className={style.RecipientLocationMainPortrait}>
            <img src={portrait} alt="user" className={style.RecipientLocationPortrait} />
          </div>
          <div className={style.RecipientLocationTextTitle}>
            <h3 className={style.RecipientLocationPresentation}>Voici les formules que nous proposons pour vos proches</h3>
          </div>
        </div>
      </div>
      <div className={style.ratesMainContainer}>
        {formule.length &&
          formule.map((element) => {
            return <OfferRateCard key={element.formule_id} formule={element.formule_name} price={element.formule_details} />;
          })}
      </div>
      <div className={style.btnNext}>
        <button onClick={handleGoToSubscribtion}>J&apos;assure mes proches</button>
      </div>
    </div>
  );
}

export default OfferRate;
