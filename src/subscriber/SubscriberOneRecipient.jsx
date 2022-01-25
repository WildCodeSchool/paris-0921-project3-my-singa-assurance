import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import style from './style/SubscriberOneRecipient.module.scss';
import Sophie from '../assets/MpandaSophie.png';

function SubscriberOneRecipient() {
  const location = useLocation();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    location && (
      <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <div className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailBreak}>
            <p className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailText}>{location.state.recipient.first_name}</p>
            <p className={style.subscriberWelcomePageBeneficiariesImagePortraitdetailText}>TEST TEST</p>
          </div>
        </div>
        <button onClick={goBack}> Back </button>
      </div>
    )
  );
}

export default SubscriberOneRecipient;
