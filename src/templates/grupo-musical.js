import React from 'react';

import Container from '../components/Container';

import SectionTitle from '../components/SectionTitle';

import PageHeader from '../components/PageHeader';

import Layout from '../components/Layout';

import Instagram from '../assets/img/icon-instagram-black.svg';
import Facebook from '../assets/img/icon-facebook-black.svg';
import Youtube from '../assets/img/icon-youtube-black.svg';

const GrupoMusicalPage = () => {
  return (
    <Layout>
      <PageHeader
        id="page-grupo-musical-header"
        background={'../img/section-background-grupo-musical.png'}
      />
      <Container id="page-grupo-musical-wrapper">
        <SectionTitle>Grupo Musical Francisco de Assis</SectionTitle>
        <p>
          O Grupo Musical Francisco de Assis iniciou suas atividades como Coral
          Francisco de Assis, em 1990, e tem como principal objetivo a
          divulgação da Doutrina Espírita por meio das músicas. Além da
          atividade musical, os integrantes do grupo também se dedicam a
          diversas atividades desenvolvidas pelo CEFA como voluntários.
        </p>
        <p>
          O principal compromisso do grupo consiste na harmonização do público
          durante A Hora da Prece, evento de promoção doutrinária que acontece
          todos os domingos no Centro Espírita Francisco de Assis. Além disso, o
          grupo vem ampliando sua atuação, participando de vários eventos
          espíritas realizados no Estado do Ceará.{' '}
        </p>
        <p>
          Ao longo de sua trajetória, o Grupo Musical Francisco de Assis já
          gravou dois CD’s: o primeiro deles intitulado “A Hora da Prece” (2011)
          e o segundo, “Instrumentos da Paz” (2014). Com mais de 4.000 cópias
          vendidas, toda a renda gerada com as vendas é destinada para os
          trabalhos desenvolvidos pelo CEFA.
        </p>
        <p>
          A atual formação do grupo completou 10 anos em 2018, com um show
          comemorativo realizado no auditório do CEFA. Com a ajuda da
          Espiritualidade, o grupo espera continuar sua caminhada, levando
          consolo aos corações através de preces em forma de canções.
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
      </Container>
    </Layout>
  );
};

export default GrupoMusicalPage;
