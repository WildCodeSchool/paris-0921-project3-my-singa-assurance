import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  return (
    <div className={style.mainLoginPageContainer}>
      <div className={style.mainText}>
        <h2 className={style.title}>La distance n&apos;est plus un obstacle à la santé de vos proches</h2>
        <p className={style.loginText}>Bon retour parmi nous ! Connectez vous pour accèder à votre expace personnel</p>
        <label htmlFor="email">Adresse mail</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" />
        <button onClick={handleCreateAccount}>Creer un compte</button>
      </div>
      <div className={style.backgroundImage}>
        <img src={Background} alt="person entering the service" />
      </div>
    </div>
  );
}

export default LoginPage;
