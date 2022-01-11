import React, { useState } from 'react';

import style from './style/Offer.module.scss';

function Offer() {
  const [juniorCount, setJuniorCount] = useState(0);

  return (
    <div className={style.mainOfferContainer}>
      <h1>Combien de proches souhaitez-vous assurer ?</h1>
      <div>
        <div>{juniorCount < 0 ? setJuniorCount(0) : juniorCount}</div>
        <div onClick={() => setJuniorCount(juniorCount + 1)}>+</div>
        <div onClick={() => setJuniorCount(juniorCount - 1)}>-</div>
      </div>
    </div>
  );
}

export default Offer;
