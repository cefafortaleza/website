import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-social-media">
          <h3 className="footer-title">Siga-nos nas redes sociais</h3>
          <ul className="footer-sm-icons">
            <li>
              <a href="" target="_blank">
                <img alt="Logo Facebook" src="~/static/img/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img alt="Logo Instagram" src="~/static/img/instagram.svg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img alt="Logo Youtube" src="~/static/img/youtube.svg" />
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
