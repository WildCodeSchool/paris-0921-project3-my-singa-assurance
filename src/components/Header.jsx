import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/Header.module.scss';
import Logo from '../assets/logo.png';

function Header() {
  let navigate = useNavigate();

  function goLoginPage() {
    navigate('/LoginPage');
  }

  function goHome() {
    navigate('/');
  }

  return (
    <header className={style.header}>
      <navbar className={style.container}>
        <div className={style.brand} onClick={goHome}>
          <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
          <p className={style.logo}>singa</p>
        </div>
        <ul className={style.menu}>
          <li>Accueil</li>
          <li>Mode d&apos;emploi</li>
          <li>Actus</li>
          <li>Qui sommes-nous ?</li>
        </ul>
        <div className={style.buttons}>
          <button className={style.offers}>Consulter les offres</button>
          <button onClick={goLoginPage} className={style.account}>
            Se connecter
          </button>
        </div>
      </navbar>
    </header>
  );
}

export default Header;
