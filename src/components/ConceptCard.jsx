import React from 'react';
import style from './style/ConceptCard.module.scss';

const ConceptCard = ({ title, src, desc }) => {
  return (
    <div className={style.conceptCardContainer}>
      <h1 className="CardTitle">{title}</h1>
      <div>
        <img className="CardImage" src={src} alt={title} />
      </div>
      <div className="CardDescription">{desc}</div>
    </div>
  );
};

export default ConceptCard;
