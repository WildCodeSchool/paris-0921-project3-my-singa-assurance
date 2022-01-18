import React, { useState, useContext, useEffect } from 'react';

import { getRecipients } from '../services/axios.service';
import SubscriberHomePageRecipientCards from './SubscriberHomePageRecipientCards';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/SubscriberWelcomePage.module.scss';

function SubscriberWelcomePage() {
  const { decodedToken } = useContext(SubscriberInfoContext);

  const [recipientName, setRecipientName] = useState([]);

  useEffect(async () => {
    const id = decodedToken.id;
    const getData = async () => {
      const res = await getRecipients(id);
      return res.data;
    };
    const result = await getData();
    setRecipientName([result]);
  }, []);

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
      <div className={style.recipientInfo}>
        {recipientName.length &&
          recipientName.map((element) => {
            return <SubscriberHomePageRecipientCards key={element} firstName={element.first_name} lastname={element.last_name} />;
          })}
      </div>
    </div>
  );
}

export default SubscriberWelcomePage;
