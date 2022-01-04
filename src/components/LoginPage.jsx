import React from 'react';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  return (
    <>
      <div className={style.mainLoginPageContainer}>
        <div className={style.mainText}>
          <h2 className={style.logintitle}>La distance n&apos;est plus un obstacle</h2>
          <h2 className={style.logintitle}> à la santé de vos proches</h2>
          <p className={style.loginText}>Bon retour parmi nous ! Connectez vous pour accèder à votre expace personnel</p>
          {/* <label htmlFor="email">Adresse mail</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Mot de passe</label> */}
        </div>
        <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
      </div>
    </>
  );
}

export default LoginPage;
