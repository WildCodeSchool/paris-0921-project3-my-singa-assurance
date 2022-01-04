import React from 'react';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  return (
    <div className={style.mainLoginPageContainer}>
      <div className={style.mainText}>
        <h2 className={style.logintitle}>La distance n&apos;est plus un obstacle</h2>
        <h2 className={style.logintitle}> à la santé de vos proches</h2>
        <p className={style.loginText}>Bon retour parmi nous ! Connectez vous pour accèder à votre expace personnel</p>
        <label htmlFor="email">Adresse mail</label>
        <input type="email" id="email" placeholder="a.bukasa@gmail.com"></input>
        <label htmlFor="password">Mot de passe</label>
        <input type="pasword" id="password"></input>
        <div className={style.loginOptionButton}>
          <button>Se rappeler de moi</button>
          <button>Mot de passe oublié</button>
        </div>
        <div>
          <button>Connexion</button>
          <button>S&apos;inscrire</button>
        </div>
      </div>
      <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
    </div>
  );
}

export default LoginPage;
