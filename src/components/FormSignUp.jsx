import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from './style/FormSignup.module.scss';

function FormSignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const creationDate = new Date().toISOString().split('.')[0] + 'Z';
    await axios.post('http://localhost:8080/subscribers', {
      ...data,
      birth_date: new Date(data.birth_date).toISOString().split('.')[0] + 'Z',
      Postal_code: Number(data.Postal_code),
      create_date: creationDate,
      last_update: creationDate,
    });
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formGroup}>
          <div>
            <label htmlFor="first_name">Prénom</label>
            <input type="text" name="first_name" id="first_name" {...register('first_name')} />
          </div>
          <div>
            <label htmlFor="last_name">Nom</label>
            <input type="text" name="last_name" id="last_name" {...register('last_name')} />
          </div>
        </div>
        <div className={style.formGroup}>
          <div>
            <label htmlFor="birth_date">Date de naissane</label>
            <input type="datetime" name="birth_date" id="birth_date" {...register('birth_date')} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" {...register('email')} />
          </div>
        </div>
        <div className={style.formGroup}>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" {...register('password')} />
          </div>
          {/* <div>
            <label htmlFor="confirmPassword">Mot de passe</label>
            <input type="password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword')} />
          </div> */}
        </div>
        <div className={style.formSingle}>
          <label htmlFor="living_country">Pays de résidence</label>
          <input type="text" name="living_country" id="living_country" {...register('living_country')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="nationality">Nationalité</label>
          <input type="text" name="nationality" id="nationality" {...register('nationality')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="address">Adresse</label>
          <input type="text" name="address" id="address" {...register('address')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="Postal_code">Code Postal</label>
          <input type="number" name="Postal_code" id="Postal_code" {...register('Postal_code')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="City">Ville</label>
          <input type="text" name="City" id="City" {...register('City')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="marital_status">Situation administrative</label>
          <input type="text" name="marital_status" id="marital_status" {...register('marital_status')} />
        </div>
        <div className={style.formSingle}>
          <label htmlFor="phone_number">Téléphone_number</label>
          <input type="text" name="phone_number" id="phone_number" {...register('phone_number')} />
        </div>
        <div className={style.formSubmit}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormSignUp;
