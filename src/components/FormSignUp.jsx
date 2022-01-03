import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from './style/FormSignup.module.scss';

function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post('http://localhost:8080/subscribers', data);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Prénom</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          {...register('firstName', {
            required: true,
          })}
        />
        {errors.firstName && errors.firstName.message}
        <label htmlFor="lastName">Nom</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          {...register('lastName', {
            required: true,
          })}
        />
        {errors.lastName && errors.lastName.message}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && errors.email.message}
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormSignUp;
