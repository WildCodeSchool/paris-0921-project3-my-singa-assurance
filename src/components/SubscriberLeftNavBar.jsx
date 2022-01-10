import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import EcoIcon from '@material-ui/icons/Eco';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import style from './style/SubscriberLeftNavBar.module.scss';

function SubscriberLeftNavBar() {
  return (
    <div className={style.subscriberTitleContainer}>
      <div className={style.subscriberStickyNavBar}>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <HomeIcon />
          </div>
          <p className={style.subscriberText}>Bienvenue</p>
        </div>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <PeopleAltIcon />
          </div>
          <p className={style.subscriberText}>Mes bénéficiaires</p>
        </div>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <CreditCardIcon />
          </div>
          <p className={style.subscriberText}>Factures & Paiements</p>
        </div>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <DescriptionIcon />
          </div>
          <p className={style.subscriberText}>Contrats & Documents</p>
        </div>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <EcoIcon />
          </div>
          <p className={style.subscriberText}>Actions Solidaires</p>
        </div>
        <div className={style.subscribernavBarBlock}>
          <div className={style.subscriberIcon}>
            <QuestionAnswerIcon />
          </div>
          <p className={style.subscriberText}>Nous contacter</p>
        </div>
      </div>
    </div>
  );
}

export default SubscriberLeftNavBar;
