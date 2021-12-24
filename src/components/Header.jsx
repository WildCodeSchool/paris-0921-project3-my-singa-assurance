import React from 'react';

import style from './style/Header.module.scss';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className={style.header}>
      <navbar className={style.container}>
        <div className={style.brand}>
          <img src={Logo} alt="Singa Logo" />
          <p>singa</p>
        </div>
        <ul className={style.menu}>
          <li>Accueil</li>
          <li>Mode d&apos;emploi</li>
          <li>Actus</li>
          <li>Qui sommes-nous ?</li>
        </ul>
        <div className={style.buttons}>
          <button className={style.offers}>Consulter les offres</button>
          <button className={style.account}>Se connecter</button>
        </div>
      </navbar>
    </header>
  );
}

export default Header;
