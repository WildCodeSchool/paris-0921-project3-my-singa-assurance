import React from 'react';
import style from './style/SubscriberLeftNavBar.module.scss';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import EcoIcon from '@material-ui/icons/Eco';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function SubscriberLeftNavBar() {
  return (
    <div className={style.subscriberTitleContainer}>
      <div className={style.subscribernavBarBlock}>
        <HomeIcon />
        <p className={style.suscriberText}>Bienvenue</p>
      </div>
      <div className={style.subscribernavBarBlock}>
        <PeopleAltIcon />
        <p className={style.suscriberText}>Mes bénéficiaires</p>
      </div>
      <div className={style.subscribernavBarBlock}>
        <CreditCardIcon />
        <p className={style.suscriberText}>Factures & Paiements</p>
      </div>
      <div className={style.subscribernavBarBlock}>
        <DescriptionIcon />
        <p className={style.suscriberText}>Contrats & Documents</p>
      </div>
      <div className={style.subscribernavBarBlock}>
        <EcoIcon />
        <p className={style.suscriberText}>Actions Solidaires</p>
      </div>
      <div className={style.subscribernavBarBlock}>
        <QuestionAnswerIcon />
        <p className={style.suscriberText}>Nous contacter</p>
      </div>
    </div>
  );
}

export default SubscriberLeftNavBar;
