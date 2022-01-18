import React from 'react';

import style from './style/SubscriberHomePageRecipientCards.module.scss';

import Sophie from '../assets/MpandaSophie.png';

function SubscriberHomePageRecipientCards(firstname, lastname) {
  return (
    <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
      <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
        <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
        <p>{firstname}</p>
        <p>{lastname}</p>
      </div>
    </div>
  );
}

export default SubscriberHomePageRecipientCards;
