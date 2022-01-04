import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Logo from '../assets/logo.png';
import style from './style/Footer.module.scss';

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div className={style.bloc}>
        <div className={style.logoFooter}>
          <img className={style.logo} src={Logo} alt="Singa Logo" />
          <p className={style.singa}>singa </p>
        </div>
        <div>
          <p> Bonjour@Singa.com</p>
          <p>75 rue Saint-Martin</p>
          <p>75008 PARIS</p>
        </div>
      </div>

      <div className={style.bloc}>
        <div className={style.ressources}>Ressources</div>
        <div className={style.menu}>
          <p>leBlog</p>
          <p>FAQ</p>
          <p>Présence internationale</p>
          <p>Dictionnnaire assurance</p>
        </div>
      </div>

      <div className={style.bloc}>
        <div className={style.ressources}>Ressources</div>
        <div className={style.menu}>
          <p>leBlog</p>
          <p>FAQ</p>
          <p>Présence internationale</p>
          <p>Dictionnnaire assurance</p>
        </div>
      </div>

      <div className={style.infos}>
        <div className={style.suivezsinga}>Suivez Singa</div>
        <div className={style.iconContainer}>
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
}
export default Footer;
