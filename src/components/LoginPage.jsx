import React from 'react';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  return (
    <div className={style.mainLoginPageContainer}>
      <div className={style.mainText}>
        <h2 className={style.title}>La distance n&apos;est plus un obstacle à la santé de vos proches</h2>
        <p className={style.loginText}>Bon retour parmi nous ! Connectez vous pour accèder à votre expace personnel</p>
        <label htmlFor="email">Adresse mail</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Mot de passe</label>
      </div>
      <div className={style.backgroundLogin}>
        <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
      </div>
    </div>
  );
}

export default LoginPage;
