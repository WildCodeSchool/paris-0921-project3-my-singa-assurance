import React from 'react';

import style from './style/RecipientsCards.module.scss';

import Sophie from '../assets/MpandaSophie.png';

function RecipientsCards(recipient) {
  return (
    <div className={style.cardContainer}>
      <div className={style.recipientsRecap}>
        <div className={style.nameAndImg}>
          <img src={Sophie} alt="beneficiary portrait" className={style.recipientImg} />
          <div className={style.recipientIdentification}>
            <p>{recipient.recipient.first_name}</p>
            <p>{recipient.recipient.last_name}</p>
          </div>
        </div>
        <div className={style.recipientsCare}>
          <div className={style.number}>4</div> <div className={style.prises}>prises en charge ce mois-ci</div>
        </div>
      </div>
      <div className={style.recipientsDetails}> Suivre les prises en charge de vos proches</div>
      <div className={style.recipientsDetails}>
        <div>Réseau de soins Activa RDC</div> <div>Trouver le praticien le plus proche de votre bénéficiaire</div>
      </div>
    </div>
  );
}

export default RecipientsCards;
