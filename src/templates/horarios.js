import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

export const HorariosPageTemplate = ({ title, schedules }) => {
  const [activeTab, setActiveTab] = useState('sunday');

  const toggleScheduleTab = (tab) => () => {
    console.log('clicked');
    console.log('active before change: ', activeTab);

    document.getElementById(activeTab).classList.remove('active-tab');
    document
      .getElementById(`button-${activeTab}`)
      .classList.remove('active-button');
    setActiveTab(tab);
    document.getElementById(tab).classList.add('active-tab');
    document.getElementById(`button-${tab}`).classList.add('active-button');
    console.log('active changed: ', activeTab);
  };

  return (
    <>
      <Container>
        <section>
          <SectionTitle>Horários</SectionTitle>
          <div className="schedule-tabs-wrapper">
            <ul className="schedule-tabs">
              {Object.keys(schedules).map((daySchedule, index) => {
                return (
                  <>
                    <li className="schedule-tab" key={index}>
                      <button
                        className={index === 0 ? 'active-button' : ''}
                        id={`button-${daySchedule}`}
                        onClick={toggleScheduleTab(daySchedule)}
                      >
                        {daySchedule}
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="schedule-content">
              {Object.keys(schedules).map((daySchedule, index) => {
                return (
                  <>
                    <div
                      className={`schedule-tab ${
                        index === 0 ? 'active-tab' : ''
                      }`}
                      id={[daySchedule]}
                      key={[daySchedule]}
                    >
                      {Object.keys(schedules[daySchedule]).map((shift) => {
                        return (
                          <>
                            <div
                              className={`schedule ${[shift]}`}
                              key={[shift]}
                            >
                              <ul className="schedule-list">
                                <h3>{shift}</h3>
                                {schedules[daySchedule][shift].map(
                                  (activity, index) => {
                                    return (
                                      <>
                                        <li key={index}>
                                          <p>
                                            <span>{activity.time} </span>
                                            {activity.description}
                                          </p>
                                        </li>
                                      </>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <SectionTitle>Atividades</SectionTitle>
        </section>
        <section>
          <SectionTitle>Livraria</SectionTitle>
        </section>
        <section>
          <SectionTitle>Biblioteca</SectionTitle>
        </section>
        <section>
          <SectionTitle>Palestras</SectionTitle>
        </section>
        <section>
          <SectionTitle>Eventos</SectionTitle>
        </section>
      </Container>
    </>
  );
};

HorariosPageTemplate.propTypes = {
  title: PropTypes.string,
  schedules: PropTypes.object,
};

const HorariosPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;
  const { title, schedules } = frontmatter;

  return (
    <Layout>
      <HorariosPageTemplate title={title} schedules={schedules} />
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
        title
        schedules {
          sunday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          monday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          tuesday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          wednesday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          thursday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          friday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
          saturday {
            morning {
              time
              description
            }
            afternoon {
              time
              description
            }
            evening {
              time
              description
            }
          }
        }
      }
    }
  }
`;
