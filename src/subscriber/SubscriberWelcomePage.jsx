import React, { useContext } from 'react';

import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/SubscriberWelcomePage.module.scss';

import Sophie from '../assets/MpandaSophie.png';
import Julie from '../assets/MpandaJulie.png';

function SubscriberWelcomePage() {
  const { decodedToken } = useContext(SubscriberInfoContext);

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
        <p className={style.subscriberWelcomePagesubtextbeneficiariesText}>Comment vont vos bénéficiaires ? Jetez-y un oeil ici</p>
      </div>
      <div className={style.subscriberWelcomePageBeneficiariesImageMain}>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <img src={Sophie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <p></p>
        </div>
        <div className={style.subscriberWelcomePageBeneficiariesImagePortrait}>
          <img src={Julie} alt="beneficiary portrait" className={style.subscriberWelcomePageBeneficiariesImagePortraitdetail} />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default SubscriberWelcomePage;
