import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { checkEmail } from '../services/axios.service';
import AuthenticationContext from '../context/AuthenticationContext';

import style from './style/FormSignUpStep1.module.scss';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Prénom requis'),
  last_name: Yup.string().required('Nom requis'),
  email: Yup.string().email().required('Email requis'),
});

function FormSignUpStep1() {
  const { setRegisterationData } = useContext(AuthenticationContext);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const isMailExists = await checkEmail(data.email);
    if (isMailExists) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setRegisterationData(data);
      navigate('/createaccount/step2');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.formTitle}>
        <p className={style.title}>Faisons plus ample connaissance</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formContainer}>
          <p>Je suis</p>
          <div className={style.formGroup}>
            <div>
              <label htmlFor="first_name">Prénom</label>
              <input
                className={errors.first_name ? style.isInvalid : null}
                type="text"
                name="first_name"
                id="first_name"
                {...register('first_name')}
              />
              <p className={errors.first_name ? style.isInvalid : null}>{errors.first_name?.message}</p>
            </div>
            <div>
              <label htmlFor="last_name">Nom</label>
              <input className={errors.last_name ? style.isInvalid : null} type="text" name="last_name" id="last_name" {...register('last_name')} />
              <p className={errors.last_name ? style.isInvalid : null}>{errors.last_name?.message}</p>
            </div>
          </div>
          <div className={style.formGroup}>
            <div>
              <label htmlFor="email">Email</label>
              <input className={errors.email ? style.isInvalid : null} type="email" name="email" id="email" {...register('email')} />
              <p className={errors.email || !isEmailValid ? style.isInvalid : null}>
                {!isEmailValid ? `L'email existe déjà` : errors.email?.message}
              </p>
            </div>
          </div>
        </div>
        <div className={style.formBtn}>
          <button className={style.btnBack} onClick={handleGoBack}>
            Retour
          </button>
          <button disabled={!isValid} className={style.btnNext} type="submit">
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSignUpStep1;
