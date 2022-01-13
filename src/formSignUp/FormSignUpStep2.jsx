import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createSubscriberAccount, logIn } from '../services/axios.service';

import AuthenticationContext from '../context/AuthenticationContext';
import style from './FormSignUpStep2.module.scss';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Doit contenir au moins 8 caractères, 1 majuscule, un chiffre et un caratère spécial',
    )
    .required('Mot de passe requis'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre'),
});

function FormSignUpStep2() {
  const { registerationData, setIsLogIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  let isCreated = false;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    delete data.confirmPassword;
    const created = await createSubscriberAccount({
      ...registerationData,
      ...data,
      create_date: new Date().toISOString().split('.')[0] + 'Z',
    });

    if (created.status === 201) isCreated = true;

    const loggedin = await logIn({
      email: registerationData.email,
      password: data.password,
    });

    if (loggedin) setIsLogIn(true);

    setTimeout(() => {
      navigate('/subscribers/welcome');
    }, 2000);
  };

  return (
    <div className={style.mainContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formContainer}>
          <p>Créez votre mot de passe</p>
          <div className={style.formGroup}>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input className={errors.password ? style.isInvalid : null} type="password" name="password" id="password" {...register('password')} />
              <p className={errors.password ? style.isInvalid : null}>{errors.password?.message}</p>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
              <input
                className={errors.confirmPassword ? style.isInvalid : null}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                {...register('confirmPassword')}
              />
              <p className={errors.confirmPassword ? style.isInvalid : null}>{errors.confirmPassword?.message}</p>
            </div>
          </div>
        </div>
        <div className={style.formBtn}>
          <button className={style.btnBack}>Retour</button>
          <button disabled={!isValid} className={style.btnNext} type="submit">
            Créer
          </button>
        </div>
      </form>
      <div className={style.created}>
        <p className={isCreated ? style.showCreated : style.hideCreated}>Votre espace adhérant a bien été créé</p>
      </div>
    </div>
  );
}

export default FormSignUpStep2;
