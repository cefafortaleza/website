import React from 'react';

import Instagram from '../assets/img/icon-instagram.svg';
import Facebook from '../assets/img/icon-facebook.svg';
import Youtube from '../assets/img/icon-youtube.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-social-media">
          <h3 className="footer-title">Siga-nos nas redes sociais</h3>
          <ul className="footer-sm-icons">
            <li>
              <a
                href="https://www.instagram.com/cefafortaleza/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/CefaFortaleza"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/CEFA1941"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-rights">
          <span>
            Centro Espírita Francisco de Assis © Todos os direitos reservados{' '}
          </span>
          <span>
            Rua Senador Catunda, 117 - Benfica - Fortaleza, CE 60015-320{' '}
          </span>
        </div>
      </footer>
      
    );
  }
};

export default Footer;
