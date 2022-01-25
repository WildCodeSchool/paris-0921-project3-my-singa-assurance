import React from 'react';

import style from './style/SubscriberContrat.module.scss';

function SubscriberContrats() {
  return (
    <div className={style.mainContratsContainer}>
      <h3 className={style.titleContrat}>Contrats</h3>
      <div className={style.textContainer}>
        <div className={style.titlesContrat}>
          <p className={style.plafondContrat}>Plafond de 1550€/mois/personnes</p>
          <div className={style.prixContrat}>
            <h4 className={style.ptitleContrats}>2 personnes couvertes</h4>
            <b>20,50€/mois</b>
          </div>
        </div>
      </div>
      <h3 className={style.documentTitle}> Documents </h3>
      <div className={style.documentPersonas}>
        <h3 className={style.personas}>Alex Bukasa</h3>
        <button className={style.chevron}> Up </button>
      </div>
      <div className={style.documentContainer}>
        <div className={style.containerDocuments}>
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Conditions Générales de votre contrat</h4>
            <p className={style.docsPar}>Le document qui détaille toutes vos garanties</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
          </div>
        </div>
        <div className={style.containerDocuments}>
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Attestation d’assurance</h4>
            <p className={style.docsPar}>La preuve que votre bénéficiaire est couvert par Singa</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
          </div>
        </div>
        <div className={style.containerDocuments}>
          <div className={style.telechargeDoc}>
            <h4 className={style.docs}>Contrat d’assurance</h4>
            <p className={style.docsPar}>Votre contrat</p>
          </div>
          <div className={style.btnChange}>
            <button className={style.btn}> Télécharger</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriberContrats;
