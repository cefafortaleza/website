import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import Instagram from '../assets/img/icon-instagram-black.svg';
import Facebook from '../assets/img/icon-facebook-black.svg';
import Youtube from '../assets/img/icon-youtube-black.svg';

import { boardDiretoria } from '../assets/js/board';

function getCEFAMap() {
  if (typeof window === 'undefined') return;
  return window.innerWidth > 768
    ? {
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="1200" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
      }
    : {
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
      };
}

export const SobrePageTemplate = ({
  bylaws,
  internalPolicyLink,
  phoneNumber,
  email,
}) => {
  const [activeTab, setActiveTab] = useState('diretoria');

  const toggleBoardTab = (tab) => () => {
    document.getElementById(activeTab).classList.toggle('active-tab');
    document
      .getElementById(`button-${activeTab}`)
      .classList.toggle('active-button');
    setActiveTab(tab);
    console.log(tab);
    document.getElementById(`${tab}`).classList.toggle('active-tab');
    document.getElementById(`button-${tab}`).classList.toggle('active-button');
  };

  return (
    <section id="cefa-about">
      <Container className="container">
        <SectionTitle big>Sobre o CEFA</SectionTitle>
        <div className="index">
          <h3>Índice</h3>
          <Link to="#apresentacao">1. Apresentação</Link>
          <Link to="#board">
            2. Diretoria, conselho consultivo e coordenadorias
          </Link>
          <Link to="#estatuto">3. Estatuto</Link>
          <Link to="#regime-interno">4. Regimento Interno</Link>
          <Link to="#localizacao">5. Localização</Link>
        </div>
        <div id="apresentacao">
          <SectionTitle>Apresentação</SectionTitle>
          <p>
            O Centro Espírita Francisco de Assis (CEFA) é uma instituição
            religiosa espírita de caráter cultural e filantrópico, que tem como
            objetivos o estudo, a prática e a divulgação do Evangelho de Jesus
            Cristo e da Doutrina Espírita, codificada por Allan Kardec
            (1804-1869).
          </p>

          <p>
            Foi fundado por Olívio Silva, Francisco Inácio da Ponte, Guiomar
            Pires, Aníbal Justa, Francisco Emídio e Mafina Feitosa, em 02 de
            dezembro de 1941, com o nome de Centro Espírita União e Caridade
            Francisco de Assis (CEUCFA). Suas primeiras atividades aconteceram
            em um prédio alugado no Centro de Fortaleza (CE), localizado na Rua
            Barão do Rio Branco, 1741.{' '}
          </p>

          <p>
            Seu primeiro Estatuto foi publicado no Diário Oficial em novembro de
            1942 e registrado em cartório em 02 de dezembro de 1942, conferindo
            ao Centro Espírita personalidade jurídica e descrevendo sua primeira
            Diretoria, composta por: Presidente: Joaquim Maia de Oliveira;
            Vice-Presidente: Antônio Rodrigues de Almeida; 1º Secretário:
            Francisco Barbosa Serra; 2º Secretário: Almerindo Mendonça dos Reis;
            Tesoureiro: Olívio Silva; 2º Tesoureiro: Militão Pinto Pereira; 1º
            Orador: José Mendes Figueiredo; 2º Orador: José Sousa Lima; e,
            Procuradores Gerais: Pedro Carlos Braga e Joventino Gomes Barbosa.{' '}
          </p>

          <p>
            A sua legalização constitui fato de suma importância, tendo em vista
            que as atividades filosóficas e religiosas na senda espírita sofriam
            perseguições na época tanto do Clero Romano como do Governo. Hoje, o
            CEFA possui uma sede própria, localizada na Rua Senador Catunda,
            117, no Bairro Benfica, cuja escritura de compra do terreno data de
            18 de março de 1948. Foram 7 anos de trabalho até a sua inauguração,
            em 23 de julho de 1955. Ainda em obras, o prédio foi visitado em 24
            de novembro de 1950 por Leopoldo Machado - uma das figuras mais
            expressivas do Espiritismo no Brasil -, em sua Caravana da
            Fraternidade, movimento que percorreu os estados do Norte e Nordeste
            com o objetivo de promover uma maior aproximação entre os espíritas
            e divulgar a Doutrina Espírita. Nas palavras do confrade, conforme
            consta no livro “A Caravana da Fraternidade”, de sua autoria e
            publicado pela Federação Espírita Brasileira (FEB), “Fomos visitar a
            sede do Francisco de Assis, ainda em construção. Sede enorme. Um
            mundo de casa, talvez, para abrigar toda Fortaleza espiritista”.
          </p>

          <p>
            Com quase 80 anos de atividades, o CEFA tem influenciado o
            surgimento de vários Centros Espíritas no Ceará, constituindo um
            modelo de referência para o Movimento Espírita cearense.
          </p>
        </div>
        <div id="board">
          <SectionTitle>
            Diretoria, Conselho Consultivo Fiscal e Coordenadorias
          </SectionTitle>
          <div className="board-tabs-wrapper">
            <ul className="board-tabs">
              <li className="board-tab">
                <button
                  className="active-button"
                  id="button-diretoria"
                  onClick={toggleBoardTab('diretoria')}
                >
                  Diretoria Executiva
                </button>
              </li>
              <li className="board-tab">
                <button
                  id="button-conselho-consultivo-fiscal"
                  onClick={toggleBoardTab('conselho-consultivo-fiscal')}
                >
                  Conselho Consultivo Fiscal
                </button>
              </li>
              <li className="board-tab">
                <button
                  id="button-coordenadores"
                  onClick={toggleBoardTab('coordenadores')}
                >
                  Coordenadores
                </button>
              </li>
            </ul>
            <div className="board-content">
              {console.log(boardDiretoria[1].boardName.toLowerCase().replace(/ /g, '-'))}
              {boardDiretoria.map((tab, index) => {
                return (
                  <div
                    className={`board-tab ${
                      'diretoria' === tab.boardName.toLowerCase()
                        ? 'active-tab'
                        : ''
                    }`}
                    key={index}
                    id={tab.boardName.toLowerCase().replace(/ /g, '-')}
                  >
                    <h3 className="section-title">{tab.boardName}</h3>
                    <div className="membros">
                      {tab.membros.map((membro) => {
                        return (
                          <div className="membro">
                            <p className="bold">{membro.cargo}:</p>
                            <p>{membro.nome}</p>
                            <p>{membro.email}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="estatuto">
          <SectionTitle>Estatuto</SectionTitle>
          <a href={`${bylaws}`} download>
            Download!
          </a>
        </div>
        <div id="regime-interno">
          <SectionTitle>Regimento Interno</SectionTitle>
          <a href={`${internalPolicyLink}`} download>
            Download!
          </a>
        </div>
        <div id="localizacao">
          <SectionTitle>Localização</SectionTitle>
          <p>
            Telefone: <Link to={`tel:+${phoneNumber}`}>{phoneNumber}</Link>
          </p>
          <p>
            Email: <Link to={`mailto:${email}`}>{email}</Link>
          </p>
          <div className="social-media-wrapper">
            <a
              href="https://www.instagram.com/cefafortaleza/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>

            <a
              href="https://www.facebook.com/CefaFortaleza"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://www.youtube.com/user/CEFA1941"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={getCEFAMap()} />
          <div>
            <p>Rua Senador Catunda, 117 - Benfica, Fortaleza - CE, 60015-320</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

SobrePageTemplate.propTypes = {
  bylaws: PropTypes.string,
  internalPolicyLink: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
};

const SobrePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const { bylaws, internalPolicyLink, phoneNumber, email } = frontmatter;
  return (
    <Layout>
      <SobrePageTemplate
        bylaws={bylaws}
        internalPolicyLink={internalPolicyLink}
        phoneNumber={phoneNumber}
        email={email}
      />
    </Layout>
  );
};

SobrePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SobrePage;

export const pageQuery = graphql`
  query SobrePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sobre" } }) {
      frontmatter {
        bylaws
        internalPolicyLink
        phoneNumber
        email
      }
    }
  }
`;
