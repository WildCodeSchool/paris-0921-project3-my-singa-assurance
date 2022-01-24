import React, { useContext } from 'react';

import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/SubscriberWelcomePage.module.scss';

import Sophie from '../assets/MpandaSophie.png';
import Julie from '../assets/MpandaJulie.png';

function SubscriberWelcomePage() {
  const { decodedToken } = useContext(SubscriberInfoContext);
  const { recipientsInfo } = useContext();

  const Emoji = (props) => (
    <span className={style.emojiHandleft} role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  return (
    <div className={style.mainContainerSubscriberWelcomePage}>
      <div className={style.subscriberWelcomePagePaymentInformation}>
        <p className={style.subscriberWelcomePagePaymentInformationText}>Paiement de 20.50€TTC par prélèvement automatique - A venir</p>
      </div>
      <div className={style.subscriberWelcomePagetitleContainer}>
        <h1 className={style.subscriberWelcomePagetitleContainerText}>
          Bonjour <span className={style.SuscriberdecodedToken}>{decodedToken.firstName} !</span>
        </h1>
      </div>
      <div className={style.subscriberWelcomePagesubtextbeneficiaries}>
        <p className={style.subscriberWelcomePagesubtextbeneficiariesText}>
          Comment vont vos bénéficiaires ? <span className={style.subscriberWelcomePagesubtextbeneficiariesTextSpan}>Jetez-y un oeil ici </span>
          <Emoji label="backhand index pointing left" symbol="👈" />
        </p>
      </div>
      <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <p></p>
        </div>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <img src={Julie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <p>
            {recipientsInfo.firstName}
            {recipientsInfo.lastName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscriberWelcomePage;
