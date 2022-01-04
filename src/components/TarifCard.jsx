import React from 'react';
import style from './style/TarifCard.module.scss';

const TarifCard = ({ title, couverture, prix, desc, color }) => {
  return (
    <div className={style.tarifCardContainer}>
      <div className={style.titleContainer} style={{ backgroundColor: color }}>
        <h1>{title}</h1>
      </div>
      <div className={style.divTarif}>couverture à {couverture}%</div>
      <div className={style.divTarif}> à partir de </div>
      <div className={style.divTarif}>{prix}€</div>
      <div className={style.divTarif}>{desc}</div>
      <button className={style.buttons}>Souscrire</button>
    </div>
  );
};

export default TarifCard;
