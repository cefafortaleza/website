import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';
import MainSlides from '../components/MainSlides';
import Container from '../components/Container';
import Instagram from '../components/InstagramFeed';
import axios from 'axios';

export const IndexPageTemplate = ({ slides }) => {
  const [posts, setPosts] = useState([]);

  const getLatestPosts = async () => {
    // 'https://www.instagram.com/explore/tags/cefasite/?__a=1'
    const response = await axios.get(
      'https://api.instagram.com/v1/tags/cefasite?access_token=IGQVJXeHhvSUQyQVROZAXVrQ21NdHpuMWpSaTVSUmV4QVZA1N1o4d3J2RU52RE9UcUozZAGw2dy1GRlZAmeEZAOVDBueS1Dc2h6cDRhbFhkdnI2X2NpVGlFd1lrSXU4c1drdjVqRnBWUW80dUR0elhtTm1tQwZDZD',
      { mode: 'no-cors' }
    );
    const data = await response.json();
    if (data) await setPosts(data);

    return console.log(data, posts);
  };

  useEffect(() => {
    getLatestPosts();
  }, [getLatestPosts]);
  return (
    <>
      <MainSlides slides={slides} />

      <section>
        <Container>
          <SectionTitle>Redes Sociais</SectionTitle>
          <Instagram />
          <div className="social-media-posts-wrapper">
            <div className="post-wrapper">
              <div
                className="post"
                style={{
                  background: `url(../img/social-media-post-thumbnail-filler.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
            <div className="post-wrapper">
              <div
                className="post"
                style={{
                  background: `url(../img/social-media-post-thumbnail-filler.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
            <div className="post-wrapper">
              <div
                className="post"
                style={{
                  background: `url(../img/social-media-post-thumbnail-filler.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
            <div className="post-wrapper">
              <div
                className="post"
                style={{
                  background: `url(../img/social-media-post-thumbnail-filler.png)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <PostList />
        </Container>
        <SectionHeader
          title="Conheça o grupo musical francisco de assis"
          buttonText="Clique Aqui"
          buttonLink="/grupo-musical"
          id="grupo-musical"
          background="../img/section-background-grupo-musical.png"
          black
        />
      </section>
      <section>
        <Container>
          <SectionTitle big>Mais do CEFA</SectionTitle>
          <SectionTitle small>Doações Voluntárias</SectionTitle>

          <p>
            O CEFA trabalha diversas atividades na Ação Social, voltadas ao
            atendimento de pessoas em condição de vulnerabilidade. São
            desenvolvidos quatro programas sociais: Coração Fraterno, Arte
            Feliz, Renascer e Mão Amiga. Para que essas atividades possam
            acontecer, a sua contribuição é muito importante.
          </p>

          <p>
            Preferencialmente, são bem-vindas doações de alimentos não
            perecíveis; materiais de higiene e limpeza; brinquedos; roupas;
            acessórios e utensílios em bom estado de conservação, que possam ser
            colocados em bazares ou para doação direta, além de roupas;
            utensílios de enxovais e mobiliários para atender às gestantes.{' '}
          </p>

          <p>
            Na impossibilidade desse tipo de contribuição, também é possível a
            realização de doações financeiras, por meio de depósito na seguinte
            Conta Poupança:
          </p>

          <p className="bold">Centro Espírita Francisco de Assis</p>
          <span>
            CNPJ: 07.130.297/001-59
            <br />
            Banco do Brasil (001)
            <br />
            Agência: 8076-4
            <br />
            Conta: 4520-9
            <br />
            Variação: 51
          </span>
        </Container>
      </section>

      <section>
        <SectionHeader
          title="Gostaria de alugar um livro?"
          buttonText="Conheça nossa biblioteca"
          buttonLink="/biblioteca"
          background="../img/section-background-biblioteca.png"
          id="biblioteca"
        />
      </section>
      <section>
        <Container>
          <SectionTitle small>Livraria</SectionTitle>

          <p>
            A Livraria Bezerra de Menezes, do Centro Espirita Francisco de Assis
            (CEFA), tem como principal objetivo a divulgação da Doutrina
            Espírita.
          </p>
          <p>
            Na Livraria do CEFA podem ser encontrados à venda diversos títulos
            da Literatura Espírita, voltados desde o público infantojuvenil até
            o público adulto.
          </p>
          <p>
            As vendas podem ser feitas tanto em dinheiro como no cartão (débito
            ou crédito), com parcelamento a partir de R$ 100,00. A livraria
            funciona diariamente, nos seguintes horários:
          </p>
          <a href="/biblioteca">
            Clique aqui para ver os horários de funcionamento
          </a>
        </Container>
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  slides: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { slides } = frontmatter;
  return (
    <Layout>
      <IndexPageTemplate slides={slides} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        slides {
          frase
          autor
          background
          align
          color
          primeiro_botao_link
          primeiro_botao_texto
          segundo_botao_link
          segundo_botao_texto
        }
      }
    }
  }
`;
