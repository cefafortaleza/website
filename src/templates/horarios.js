import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

export const HorariosPageTemplate = ({ title }) => {
  const [activeTab, setActiveTab] = useState('mon');

  const toggleScheduleTab = (tab) => () => {
    console.log('clicked');
    console.log('active before change: ', activeTab);

    document.getElementById(activeTab).classList.remove('active-tab');
    setActiveTab(tab);
    document.getElementById(tab).classList.add('active-tab');
    console.log('active changed: ', activeTab);
  };

  return (
    <>
      <section>
        <SectionTitle>Horários</SectionTitle>
        <div className="schedule-tabs-wrapper">
          <ul className="schedule-tabs">
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('mon')}>Segunda</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('tue')}>Terça</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('wed')}>Quarta</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('thr')}>Quinta</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('fri')}>Sexta</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('sat')}>Sábado</button>
            </li>
            <li className="schedule-tab">
              <button onClick={toggleScheduleTab('sun')}>Domingo</button>
            </li>
          </ul>
          <div className="schedule-content">
            <div className="schedule-tab active-tab" id="mon">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="schedule-tab" id="tue">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
            <div className="schedule-tab" id="wed">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
            <div className="schedule-tab" id="thr">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
            <div className="schedule-tab" id="fri">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
            <div className="schedule-tab" id="sat">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
            <div className="schedule-tab" id="sun">
              <div className="schedule morning">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule afternoon">
                <ul className="schedule-list">
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>--:-- - </span>Activity
                    </p>
                  </li>
                </ul>
              </div>
              <div className="schedule evening"></div>
            </div>
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
    </>
  );
};

HorariosPageTemplate.propTypes = {
  title: PropTypes.string,
};

const HorariosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HorariosPageTemplate title={frontmatter.title} />
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
      }
    }
  }
`;
