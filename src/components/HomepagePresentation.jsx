import React from 'react';

import style from './style/HomepagePresentation.module.scss';
import HomepagePresentationImg from '../assets/HomepagePresentationImg.png';

function HomepagePresentation() {
  return (
    <div className={style.mainContainer}>
      <div className={style.text}>
        <h1 className={style.titre}>Singa, l&apos;assurance santé pour vos proches en RDC</h1>
        <div>
          <p> Nous croyons que l&apos;Afrique mérite d&apos;avoir accès à des soins de qualité.</p>
          <p> Singa permet à la diaspora d&apos;offrir à leurs proches une mutuelle santé simple, solidaire et utile</p>
          <p> Et tout ça en soutenant des causes qui ont un impact positif sur l&apos;économie locale</p>
        </div>
        <button>Consulter les offres</button>
      </div>
      <img alt="HomepagePresentationImg" src={HomepagePresentationImg} className={style.mainImg}></img>
    </div>
  );
}

export default HomepagePresentation;
