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

  toggleHamburger = () => {
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
  };

  render() {
    return (
      // <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
      //       </Link>
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-start has-text-centered">
      //         <Link className="navbar-item" to="/about">
      //           About
      //         </Link>
      //         <Link className="navbar-item" to="/products">
      //           Products
      //         </Link>
      //         <Link className="navbar-item" to="/blog">
      //           Blog
      //         </Link>
      //         <Link className="navbar-item" to="/contact">
      //           Contact
      //         </Link>
      //         <Link className="navbar-item" to="/contact/examples">
      //           Form Examples
      //         </Link>
      //       </div>
      //       <div className="navbar-end has-text-centered">
      //         <a
      //           className="navbar-item"
      //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <span className="icon">
      //             <img src={github} alt="Github" />
      //           </span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-logo">
          <Link className="navbar-brand navbar-logo-wrapper" to="/">
            <img src={logoCefa} width="80" height="80" alt="Logo CEFA" />
          </Link>
          <div className="logo-title">
            <span>CEFA</span>
            <p>
              Centro Espírita <br /> Francisco de Assis
            </p>
          </div>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>
        </div>

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
      </nav>
    );
  }
};

export default Navbar;
