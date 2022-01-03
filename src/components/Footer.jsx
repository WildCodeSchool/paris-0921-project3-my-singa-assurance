import React from 'react';
import Logo from '../assets/logo.png';
import style from './style/Footer.module.scss';

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div>
        <div className={style.logoFooter}>
          <img className={style.logo} src={Logo} alt="Singa Logo" />
          <p>singa</p>
        </div>
        <p> Bonjour@Singa.com</p>
        <p>75 rue Saint-Martin</p>
        <p>75008 PARIS</p>
      </div>

      <div>
        <div>Ressources</div>
        <ul className={style.menu}>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Présence internationale</li>
          <li>Dictionnnaire assurance</li>
        </ul>
      </div>

      <div>
        <div>Ressources</div>
        <ul className={style.menu}>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Présence internationale</li>
          <li>Dictionnnaire assurance</li>
        </ul>
      </div>

      <div>
        <div>Suivez Singa</div>
        <div>Button</div>
      </div>
    </div>
  );
}
export default Footer;
