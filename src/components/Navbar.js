import React from 'react';
import { Link } from 'gatsby';

import logoCefa from '../../static/img/logocefa2.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly

        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    console.log('clicked');
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-logo navbar-brand">
          <Link className="navbar-item navbar-logo-wrapper" to="/">
            <img src={logoCefa} width="80" height="80" alt="Logo CEFA" />
          </Link>
          <div className="logo-title">
            <span>CEFA</span>
            <p>
              Centro Espírita <br /> Francisco de Assis
            </p>
          </div>

          <button
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleHamburger()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/sobre">
              Sobre o CEFA
            </Link>

            <Link className="navbar-item" to="/atividades">
              Atividades
            </Link>

            <Link className="navbar-item" to="/palestras">
              Palestras
            </Link>

            <Link className="navbar-item" to="/contato">
              Contato
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">Mais</Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/horarios">
                  Horários
                </Link>
                <Link className="navbar-item" to="/espiritismo">
                  Espiritismo
                </Link>
                <Link className="navbar-item" to="/voluntariado">
                  Voluntariado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
