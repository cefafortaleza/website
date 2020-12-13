import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

import { atividadesCEFA } from '../assets/js/atividades';

export const HorariosPageTemplate = ({ horarios, horariosPandemia }) => {
  const [activeTab, setActiveTab] = useState('domingo');

  const toggleScheduleTab = (tab) => () => {
    document.getElementById(activeTab).classList.toggle('active-tab');
    document
      .getElementById(`button-${activeTab}`)
      .classList.toggle('active-button');
    setActiveTab(tab);
    document.getElementById(`${tab}`).classList.toggle('active-tab');
    document.getElementById(`button-${tab}`).classList.toggle('active-button');
  };

  return (
    <>
      <Container id="horarios-page">
        <section>
          <SectionTitle>Horários</SectionTitle>
          <div className="schedule-tabs-wrapper">
            <ul className="schedule-tabs">
              {horariosPandemia.map((dia, index) => {
                return (
                  <>
                    <li
                      className="schedule-tab"
                      key={`${dia.dayname.toLowerCase()}-${index}`}
                    >
                      <button
                        className={index === 0 ? 'active-button' : ''}
                        id={`button-${dia.dayname.toLowerCase()}`}
                        onClick={toggleScheduleTab(
                          `${dia.dayname.toLowerCase()}`
                        )}
                      >
                        {dia.dayname}
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="schedule-content">
              {horariosPandemia.map((dia, index) => {
                return (
                  <>
                    <div
                      className={`schedule-tab ${
                        index === 0 ? 'active-tab' : ''
                      }`}
                      id={`${dia.dayname.toLowerCase()}`}
                      key={`${dia.dayname.toLowerCase()}-${index}`}
                    >
                      <div className="day-wrapper">
                        {dia.turnos.map((turno, indexTurno) => (
                          <div className="turno-wrapper">
                            <h3>{turno.name}</h3>
                            {turno.horarios
                              ? turno.horarios.map(
                                  (horarios, indexHorarios) => (
                                    <div className="horario-wrapper">
                                      <p>
                                        <span>{horarios.time}</span> -
                                        {horarios.description}
                                      </p>
                                    </div>
                                  )
                                )
                              : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <SectionTitle big>Atividades</SectionTitle>
          <div className="atividades-content-wrapper">
            {atividadesCEFA.map((grupo, grupoIndex) => (
              <div
                id={`section-${grupo.nomeDoGrupo
                  .toLowerCase()
                  .replace(/ /g, '-')}`}
                className="grupo"
                key={`grupo-${grupoIndex}`}
              >
                <SectionTitle>
                  {grupoIndex + 1}.0 - {grupo.nomeDoGrupo}
                </SectionTitle>
                <div className="atividades">
                  {grupo.atividades.map((atividade, atividadeIndex) => (
                    <div
                      key={`${grupo.nomeDoGrupo}-${atividade.nomeDaAtividade}`}
                      className="atividade"
                      id={`${atividade.nomeDaAtividade
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      <SectionTitle small>
                        {grupoIndex + 1}.{atividadeIndex + 1} -{' '}
                        {atividade.nomeDaAtividade}
                      </SectionTitle>
                      <div className="horarios">
                        {atividade.horarios.map((horario, atividadeIndex) => (
                          <div clasName="horario">
                            <p>
                              {horario.dia} - {horario.horarios}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <SectionTitle big>Livraria</SectionTitle>
          <div className="horario-item">
            <p>Sábados e Domingos</p>
            <span>15:00 às 19:30</span>
          </div>
          <div className="horario-item">
            <p>2as, 4as, 5as, 6as</p>
            <span>18:00 às 20:30</span>
          </div>
          <div className="horario-item">
            <p>Terças</p>
            <span>15:00 às 20:30</span>
          </div>
        </section>
        <section>
          <SectionTitle big>Biblioteca</SectionTitle>
          <div className="horario-item">
            <p>Sábados e Domingos</p>
            <span>15:00 às 19:30</span>
          </div>
          <div className="horario-item">
            <p>2as, 4as, 5as, 6as</p>
            <span>15:00 às 19:30</span>
          </div>
          <div className="horario-item">
            <p>Terças</p>
            <span>15:00 às 20:30</span>
          </div>
        </section>
        <section>
          <SectionTitle big>Palestras</SectionTitle>
          <a href="/palestras">
            Clique aqui para ver os horários das próximas palestras!
          </a>
        </section>
      </Container>
    </>
  );
};

HorariosPageTemplate.propTypes = {
  horarios: PropTypes.object,
  horariosPandemia: PropTypes.object,
};

const HorariosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { horarios, horariosPandemia } = frontmatter;

  return (
    <Layout>
      <HorariosPageTemplate
        horarios={horarios}
        horariosPandemia={horariosPandemia}
      />
    </Layout>
  );
};

HorariosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HorariosPage;

export const pageQuery = graphql`
  query HorariosPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "horarios" } }) {
      frontmatter {
        horarios {
          dayname
          turnos {
            name
            horarios {
              time
              description
            }
          }
        }
        horariosPandemia {
          dayname
          turnos {
            name
            horarios {
              time
              description
            }
          }
        }
      }
    }
  }
`;
