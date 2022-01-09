import React from 'react';
import ActionSolide from '../assets/ActionSolide.png';
import style from './style/ActusPage.module.scss';

function ActusPage() {
  return (
    <div className={style.mainActusPageContainer}>
      <div className={style.textActus}>
        <h2 className={style.actustitle}>Les Actions Solidaires de Singa</h2>
        <p className={style.actusdescription}>
          Nous avons conçu Singa pour faire ressortir le meilleur de tous,tout en ayant un impact positif sur la société.
        </p>
        <div className={style.imageActionMain}>
          <img alt="ActionSolideimg" src={ActionSolide} className={style.actionImg} />
        </div>
      </div>
    </div>
  );
}
export default ActusPage;
