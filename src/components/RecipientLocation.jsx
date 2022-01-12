import React from 'react';

import style from './style/RecipientLocation.module.scss';
import portrait from '../assets/portraitRecipient.png';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import lightbulb from '../assets/lightBulb.png';

function RecipientLocation() {
  const Emoji = (props) => (
    <span className={style.emojiHandright} role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
    </span>
  );

  return (
    <div className={style.RecipientLocationContainer}>
      <div className={style.RecipientLocationTitle}>
        <div className={style.RecipientLocationMainPortrait}>
          <img src={portrait} alt="user" className={style.RecipientLocationPortrait} />
        </div>
        <div className={style.RecipientLocationTextTitle}>
          <h3 className={style.RecipientLocationPresentation}>On vérifie les centres de soins couverts par Singa ? </h3>
          <h3 className={style.RecipientLocationPresentation}>
            Sinon, passons directement à notre formule ! <Emoji label="backHand Index pointing right" symbol="👉" />
          </h3>
        </div>
      </div>
      <div className={style.RecipientLocationWhere}>
        <h2 className={style.RecipientLocationWhereTitle}>Où habitent-ils ?</h2>
      </div>
      <div className={style.RecipientLocationChooseRegion}>
        <input type="text" id="text" name="test" placeholder="Ville ou région" className={style.RecipientLocationChooseRegionInput} />
      </div>
      <div className={style.RecipientLocationTextMain}>
        <div className={style.RecipientLocationIconLightBulbMain}>
          <img src={lightbulb} alt="idea" className={style.RecipientLocationIconLightBulb} />
        </div>
        <p className={style.RecipientLocationText}>Vérifions où se trouvent les partenaires santé de Singa</p>
      </div>
      <div className={style.RecipientLocationButtonMain}>
        <button className={style.RecipientLocationButton}>
          <div className={style.RecipientLocationIcon}>
            <ArrowBackOutlinedIcon />
          </div>
          <p className={style.RecipientLocationButtonText}>Retour</p>
        </button>
        <button className={style.RecipientLocationButton}>
          <p className={style.RecipientLocationButtonText}>Passer</p>
        </button>
      </div>
    </div>
  );
}

export default RecipientLocation;
