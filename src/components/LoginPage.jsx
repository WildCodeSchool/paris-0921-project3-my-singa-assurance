import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/createaccount');
 
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className={style.mainLoginPageContainer}>
      <div className={style.mainText}>
        <h2 className={style.logintitle}>La distance n&apos;est plus un obstacle</h2>
        <h2 className={style.logintitle}> à la santé de vos proches</h2>
        <p className={style.loginText1}>Bon retour parmi nous ! Connectez vous pour accèder </p>
        <p className={style.loginText2}>à votre espace personnel</p>
        <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.loginEmail}>
            <label htmlFor="email" className={style.loginEmailLabel}>
              Adresse mail
            </label>
            <input type="text" id="email" className={style.loginEmailInput} placeholder="a.bukasa@gmail.com" name="email" {...register('email')} />
          </div>
          <div className={style.loginPassword}>
            <label htmlFor="password" className={style.loginPasswordLabel}>
              Mot de passe
            </label>
            <input type="password" id="password" className={style.loginPasswordInput} name="password" {...register('password')} />
          </div>
          <div className={style.loginOptionButton}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="checkbox" className={style.loginRememberMe}>
              Se rappeler de moi
            </label>
            <button className={style.loginPasswordForgetButton}>Mot de passe oublié ?</button>
          </div>
          <div className={style.loginAccountButton}>
            <button className={style.loginConnexionButton}>Connexion</button>
            <button className={style.loginRegisterButton}>S&apos;inscrire</button>
          </div>
        </form>
      </div>
      <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
    </div>
  );
}

export default LoginPage;
