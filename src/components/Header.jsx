import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style/Header.module.scss';
import Logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        <div className={style.brand}>
          <img src={Logo} alt="Singa Logo" />
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
          <button onClick={handleLogIn} className={style.account}>
            Se connecter
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
