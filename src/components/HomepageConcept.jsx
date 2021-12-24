import React from 'react';
import ConceptCard from './ConceptCard';

import style from './style/HomepageConcept.module.scss';

function HomepageConcept() {
  const Concepts = [
    {
      title: '1',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Dkyxp2155Ccuo8hyY8v_IVOk_2ctoMffA&usqp=CAU',
      description: 'Versez une cotisation mensuelle basée sur le nombre de proches à assurer et leur tranche d’âge.',
    },
    {
      title: '2',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Dkyxp2155Ccuo8hyY8v_IVOk_2ctoMffA&usqp=CAU',
      description: 'Vos proches se rendent chez les partenaires santé en présentant leur carte Singa.',
    },
    {
      title: '3',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Dkyxp2155Ccuo8hyY8v_IVOk_2ctoMffA&usqp=CAU',
      description: 'Ils n’auront pas à avancer les frais couverts par Singa.',
    },
  ];

  return (
    <div>
      <h2>Notre Concept</h2>
      <div className={style.cardContainer}>
        {Concepts.map((card) => {
          return <ConceptCard key="0" title={card.title} src={card.src} desc={card.description} />;
        })}
      </div>
    </div>
  );
}

export default HomepageConcept;
