import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import EcoIcon from '@material-ui/icons/Eco';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import style from './style/SubscriberLeftNavBar.module.scss';

function SubscriberLeftNavBar() {
  const navigate = useNavigate();

  const WelcomeSubscribers = () => {
    navigate('/welcome');
  };

  return (
    <div className={style.subscriberTitleContainer}>
      <div className={style.subscriberStickyNavBar}>
        <button className={style.subscribernavBarButton} onClick={WelcomeSubscribers}>
          <div className={style.subscriberIcon}>
            <HomeIcon />
          </div>
          <p className={style.subscriberText}>Bienvenue</p>
        </button>

        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <PeopleAltIcon />
          </div>
          <p className={style.subscriberText}>Mes bénéficiaires</p>
        </button>

        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <CreditCardIcon />
          </div>
          <p className={style.subscriberText}>Factures & Paiements</p>
        </button>

        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <DescriptionIcon />
          </div>
          <p className={style.subscriberText}>Contrats & Documents</p>
        </button>
        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <EcoIcon />
          </div>
          <p className={style.subscriberText}>Actions Solidaires</p>
        </button>
        <button className={style.subscribernavBarButton}>
          <div className={style.subscriberIcon}>
            <QuestionAnswerIcon />
          </div>
          <p className={style.subscriberText}>Nous contacter</p>
        </button>
      </div>
    </div>
  );
}

export default SubscriberLeftNavBar;
