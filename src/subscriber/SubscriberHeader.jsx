import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthenticationContext from '../context/AuthenticationContext';

import style from './style/SubscriberHeader.module.scss';
import Logo from '../assets/logo.png';

function SubscriberHeader() {
  const navigate = useNavigate();
  const { setIsLogIn } = useContext(AuthenticationContext);

  const handleLogIn = () => {
    setIsLogIn(false);
    navigate('/login');
  };

  const GoHome = () => {
    navigate('/');
  };

  return (
    <header className={style.header}>
      <nav className={style.container}>
        <div className={style.brand} onClick={GoHome}>
          <img src={Logo} className={style.ImgLogo} alt="Singa Logo" />
          <p className={style.logo}>singa</p>
        </div>
        <ul className={style.menu}>
          <li className={style.headerMenuMySpace}>Mon espace</li>
          <li>Aide</li>
          <li>Mon profil</li>
          <li onClick={handleLogIn}>Se déconnecter</li>
        </ul>
      </nav>
    </header>
  );
}

export default SubscriberHeader;
