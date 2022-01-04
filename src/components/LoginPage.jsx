import React from 'react';
import { Formik } from 'formik';

import style from './style/LoginPage.module.scss';
import Background from '../assets/LoginBackground.png';

function LoginPage() {
  return (
    <div className={style.mainLoginPageContainer}>
      <div className={style.mainText}>
        <h2 className={style.title}>La distance n&apos;est plus un obstacle à la santé de vos proches</h2>
        <p className={style.loginText}>Bon retour parmi nous ! Connectez vous pour accèder à votre expace personnel</p>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Requis';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Adresse email invalide';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />

              {errors.email && touched.email && errors.email}

              <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />

              {errors.password && touched.password && errors.password}

              <button type="submit" disabled={isSubmitting}>
                Connexion
              </button>
            </form>
          )}
        </Formik>

        {/* <label htmlFor="email">Adresse mail</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Mot de passe</label> */}
      </div>
      <div className={style.backgroundLogin}>
        <img src={Background} className={style.backgroundImageLogin} alt="person entering the service" />
      </div>
    </div>
  );
}

export default LoginPage;
