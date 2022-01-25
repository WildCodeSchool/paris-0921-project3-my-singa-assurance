import React from 'react';

import style from './style/FormSignUpResume.module.scss';
import portrait from '../assets/portraitRecipient.png';

function FormSignUpResume() {
  return (
    <div className={style.mainContainer}>
      <div className={style.formTitle}>
        <div className={style.FormSignUpResumeMainPortrait}>
          <img src={portrait} alt="user" className={style.FormSignUpResumePortraitDetail} />
        </div>
        <p className={style.title}>On résume ?</p>
      </div>

      <div className={style.FormSignUpResumeMainContent}>
        <div className={style.FormSignUpResumeMainInfos}></div>
        <div className={style.FormSignUpResumeMainPayment}>
          <h2>Informations de paiement</h2>
          <p>Numéro de carte bleue</p>
          <input type="text" placeholder="1234 1234 1234 1234" style={{ opacity: '40%' }} />
          <div className={style.FormSignUpResumeMainPaymentDetail}>
            <div className={style.FormSignUpResumeMainPaymentDetailDate}>
              <p>Date d&apos;expiration</p>
              <input type="text" placeholder="01/22" style={{ opacity: '40%' }} />
            </div>
            <div className={style.FormSignUpResumeMainPaymentDetailCVC}>
              <p>CVC</p>
              <input type="text" placeholder="123" style={{ opacity: '40%' }} />
            </div>
          </div>
          <div className={style.FormSignUpResumeMainPaymentText}>
            <input type="checkbox" />
            <p className={style.FormSignUpResumeMainPaymentTextDetail}>
              En réglant par carte bancaire, vous acceptez que Singa traite vos données à des fins de gestion de votre contrat, tel que défini dans
              notre Politique de confidentialité et vous acceptez les CGU de Singa
            </p>
          </div>
          <button className={style.FormSignUpResumeMainPaymentbutton}>J&apos;assure mes proches pour 20,50€/mois</button>
        </div>
      </div>
    </div>
  );
}

export default FormSignUpResume;
