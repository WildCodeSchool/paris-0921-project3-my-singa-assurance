import React from 'react';
import style from './style/TarifCard.module.scss';

const TarifCard = ({ title, couverture, prix, desc }) => {
  return (
    <div className={style.tarifCardContainer}>
      <div className={style.titleContainer}>
        <h1 className="CardTitle">{title}</h1>
      </div>
      <div>couverture à {couverture}%</div>
      <div> à partir de </div>
      <div>{prix}€</div>
      <div>{desc}</div>
      <div className={style.buttons}>
        <button className={style.offers}>Souscrire</button>
      </div>
    </div>
  );
};

export default TarifCard;
