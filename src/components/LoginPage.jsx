/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { logIn } from '../services/axios.service';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  const { setDecodedToken } = useContext(SubscriberInfoContext);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email requis'),
    password: Yup.string()
      .required('Mot de passe requis')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const decoded = await logIn(data);
    setDecodedToken(decoded);
    navigate('/subscribers');
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
            <input type="text" id="email" name="email" className={style.loginEmailInput} {...register('email')} placeholder={errors.email?.message} />
          </div>
          <div className={style.loginPassword}>
            <label htmlFor="password" className={style.loginPasswordLabel}>
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={style.loginPasswordInput}
              {...register('password')}
              placeholder={errors.password?.message}
            />
          </div>
          <div className={style.loginOptionButton}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="checkbox" className={style.loginRememberMe}>
              Se rappeler de moi
            </label>
            <button className={style.loginPasswordForgetButton}>Mot de passe oublié ?</button>
          </div>
          <div className={style.loginAccountButton}>
            <input className={style.loginConnexionButton} type="submit" />
            <button className={style.loginRegisterButton} onClick={handleCreateAccount}>
              S&apos;inscrire
            </button>
          </div>
        </form>
      </div>
      <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
    </div>
  );
}

export default LoginPage;
