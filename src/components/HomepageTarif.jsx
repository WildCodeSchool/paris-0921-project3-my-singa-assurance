import React from 'react';
import TarifCard from './TarifCard';

import style from './style/HomepageTarif.module.scss';

function HomepageTarif() {
  const Formules = [
    {
      title: 'Bronze',
      couverture: '60',
      description: 'Ipsum Lorem',
      prix: '50',
    },
    {
      title: 'Argent',
      couverture: '70',
      description: 'Ipsum Lorem',
      prix: '100',
    },
    {
      title: 'Platine',
      couverture: '80',
      description: 'Ipsum Lorem',
      prix: '150',
    },
  ];
  return (
    <div className={style.mainTarifCard}>
      <h2>Nos Tarifs</h2>
      <div className={style.tarifResume}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className={style.tarifContainer}>
        {Formules.map((card) => {
          return <TarifCard key="0" title={card.title} couverture={card.couverture} desc={card.description} prix={card.prix} />;
        })}
      </div>
      <button>comparer les offres</button>
    </div>
  );
}

export default HomepageTarif;
