import React from 'react';

import style from './style/SubscriberHomePageRecipientCards.module.scss';

import Sophie from '../assets/MpandaSophie.png';

function SubscriberHomePageRecipientCards(recipient) {
  return (
    <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
      <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
        <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
        <p>{recipient.recipient.first_name}</p>
        <p>{recipient.recipient.last_name}</p>
      </div>
    </div>
  );
}

export default SubscriberHomePageRecipientCards;
