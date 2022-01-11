import React, { useState } from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import style from './style/Offer.module.scss';

function Offer() {
  const [juniorCount, setJuniorCount] = useState(0);

  localStorage.setItem('JuniorCount', juniorCount);

  return (
    <div className={style.mainOfferContainer}>
      <h1>Combien de proches souhaitez-vous assurer ?</h1>
      <div className={style.countersMainContainer}>
        <div className={style.ageCounterMainContainer}>
          <div className={style.ageCounter}>
            <div>{juniorCount < 0 ? setJuniorCount(0) : juniorCount}</div>
            <div className={style.arrowBtn}>
              <ArrowDropUpIcon onClick={() => setJuniorCount(juniorCount + 1)} />
              <ArrowDropDownIcon onClick={() => setJuniorCount(juniorCount - 1)} />
            </div>
          </div>
          <div className={style.ageCounterTitle}>Juniors</div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
