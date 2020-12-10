import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import breaks from 'remark-breaks';

export const AtividadesPageTemplate = ({
  title,
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
}) => (
  <>
    <section id="atividades-index">
      <Container>
        <div className="index">
          <h3>Índice</h3>
          <h3 className="index_section">1.0 Estudo da doutrina espírita</h3>
          <Link to="#section_epe">1.1 Estudo preparatório (EPE)</Link>
          <Link to="#section_esde">1.2 Estudo sistematizado (ESDE)</Link>
          <Link to="#section_eade">1.3 Estudo aprofundado (EADE)</Link>
          <Link to="#section_edobec">
            1.4 Estudo de obras básicas e complementares
          </Link>
          <Link to="#section_papu">1.5 Palestras públicas</Link>
          <Link to="#section_horpre">1.6 Hora da Prece</Link>
          <h3 className="index_section">2.0 Atendimento Espiritual</h3>
          <Link to="#section_orifra">2.1 Orientação fraterna</Link>
          <Link to="#section_assesp">2.2 Assistência espiritual</Link>
          <Link to="#section_passee">2.3 Passe</Link>
          <Link to="#section_mediun">2.4 Mediúnicas</Link>
          <h3 className="index_section">3.0 Evangelização Infantojuvenil</h3>
          <Link to="#section_grufam">3.1 Grupo da família</Link>
          <Link to="#section_gmfias">3.2 Grupo musical Filhos de Assis</Link>
          <Link to="#section_evecam">3.3 Eventos e campanhas</Link>

          <h3 className="index_section">4.0 Ação Social</h3>

          <Link to="#section_procof">4.1 Programa Coração Fraterno</Link>
          <Link to="#section_proart">4.2 Programa Arte Feliz</Link>
          <Link to="#section_proren">4.3 Programa Renascer</Link>
          <Link to="#section_promao">4.4 Programa Mão Amiga</Link>
        </div>
      </Container>
    </section>
    <Container id="atividades-content">
      {Object.keys(sectionOne).map((subsection, index) => {
        console.log(
          `Section ${index + 1}, subsection: `,
          sectionOne[subsection]
        );
        return (
          <>
            <section id={`section_${subsection}`}>
              <div className="subsectionWrapper">
                <SectionTitle>{subsection}</SectionTitle>
                <div className="subsection">
                  {sectionOne[subsection].schedule.map((horarios) => {
                    return (
                      <div className="schedule-item">
                        <p>{horarios.day}</p>
                        <p>-</p>
                        <p>{horarios.time}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="contentWrapper">
                  <div className="richText">
                    {
                      unified()
                        .use(parse)
                        .use(breaks)
                        .use(remark2react)
                        .processSync(sectionOne[subsection].content).result
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
      {Object.keys(sectionTwo).map((subsection, index) => {
        console.log(
          `Section ${index + 1}, subsection: `,
          sectionTwo[subsection]
        );
        return (
          <>
            <section id={`section_${subsection}`}>
              <div className="subsectionWrapper">
                <SectionTitle>{subsection}</SectionTitle>
                <div className="subsection">
                  {sectionTwo[subsection].schedule.map((horarios) => {
                    return (
                      <div className="schedule-item">
                        <p>{horarios.day}</p>
                        <p>-</p>
                        <p>{horarios.time}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="contentWrapper">
                  <div className="richText">
                    {
                      unified()
                        .use(parse)
                        .use(breaks)
                        .use(remark2react)
                        .processSync(sectionTwo[subsection].content).result
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
      {Object.keys(sectionThree).map((subsection, index) => {
        console.log(
          `Section ${index + 1}, subsection: `,
          sectionThree[subsection]
        );
        return (
          <>
            <section id={`section_${subsection}`}>
              <div className="subsectionWrapper">
                <SectionTitle>{subsection}</SectionTitle>
                <div className="subsection">
                  {sectionThree[subsection].schedule.map((horarios) => {
                    return (
                      <div className="schedule-item">
                        <p>{horarios.day}</p>
                        <p>-</p>
                        <p>{horarios.time}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="contentWrapper">
                  <div className="richText">
                    {
                      unified()
                        .use(parse)
                        .use(breaks)
                        .use(remark2react)
                        .processSync(sectionThree[subsection].content).result
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
      {Object.keys(sectionFour).map((subsection, index) => {
        console.log(
          `Section ${index + 1}, subsection: `,
          sectionFour[subsection]
        );
        return (
          <>
            <section id={`section_${subsection}`}>
              <div className="subsectionWrapper">
                <SectionTitle>{subsection}</SectionTitle>
                <div className="subsection">
                  {sectionFour[subsection].schedule.map((horarios) => {
                    return (
                      <div className="schedule-item">
                        <p>{horarios.day}</p>
                        <p>-</p>
                        <p>{horarios.time}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="contentWrapper">
                  <div className="richText">
                    {
                      unified()
                        .use(parse)
                        .use(breaks)
                        .use(remark2react)
                        .processSync(sectionFour[subsection].content).result
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </Container>
  </>
);

AtividadesPageTemplate.propTypes = {
  title: PropTypes.string,
  sectionOne: PropTypes.object,
  sectionTwo: PropTypes.object,
  sectionThree: PropTypes.object,
  sectionFour: PropTypes.object,
};

const AtividadesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, ede, ateesp, evainf, acasoc } = frontmatter;

  return (
    <Layout>
      <AtividadesPageTemplate
        title={title}
        sectionOne={ede}
        sectionTwo={ateesp}
        sectionThree={evainf}
        sectionFour={acasoc}
      />
    </Layout>
  );
};

AtividadesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AtividadesPage;

export const pageQuery = graphql`
  query AtividadesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "atividades" } }) {
      frontmatter {
        title
        ede {
          epe {
            schedule {
              day
              time
            }
            content
          }
          esde {
            schedule {
              day
              time
            }
            content
          }
          eade {
            schedule {
              day
              time
            }
            content
          }
          eobc {
            schedule {
              day
              time
            }
            content
          }
          papu {
            schedule {
              day
              time
            }
            content
          }
          hodp {
            schedule {
              day
              time
            }
            content
          }
        }
        ateesp {
          orifra {
            schedule {
              day
              time
            }
            content
          }
          assesp {
            schedule {
              day
              time
            }
            content
          }
          passee {
            schedule {
              day
              time
            }
            content
          }
          mediun {
            schedule {
              day
              time
            }
            content
          }
        }
        evainf {
          grufam {
            schedule {
              day
              time
            }
            content
          }
          gmfias {
            schedule {
              day
              time
            }
            content
          }
          evecam {
            schedule {
              day
              time
            }
            content
          }
        }
        acasoc {
          procof {
            schedule {
              day
              time
            }
            content
          }
          proart {
            schedule {
              day
              time
            }
            content
          }
          proren {
            schedule {
              day
              time
            }
            content
          }
          promao {
            schedule {
              day
              time
            }
            content
          }
        }
      }
    }
  }
`;
