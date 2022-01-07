import React from 'react';
import ActionSolide from '../assets/ActionSolide.png';
import style from './style/ActionSolidaire.module.scss';

function ActionSolidaire() {
  return (
    <div className={style.actionSolidaireContainer}>
      <h2>les Actions Solidaires de Singa</h2>
      <div className={style.description}>
        <p>Nous avons conçu Singa pour faire ressortir le meilleur de tous,tout en ayant un impact positif sur la société.</p>
      </div>
      <div className={style.imageActionMain}>
        <img alt="ActionSolideimg" src={ActionSolide} className={style.actionImg} />
      </div>
    </div>
  );
}
export default ActionSolidaire;
