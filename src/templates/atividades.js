import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import { atividadesCEFA } from '../assets/js/atividades';

const AtividadesPage = () => {
  return (
    <Layout>
      <>
        <section id="atividades-index">
          <Container>
            <div className="index">
              <h3>Índice</h3>
              {atividadesCEFA.map((grupo, grupoIndex) => (
                <>
                  <h3 className="index_section">
                    {grupoIndex + 1}.0 {grupo.nomeDoGrupo}
                  </h3>
                  {grupo.atividades.map((atividade, atividadeIndex) => (
                    <Link
                      to={`#${atividade.nomeDaAtividade
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      {grupoIndex + 1}.{atividadeIndex + 1}{' '}
                      {atividade.nomeDaAtividade}
                    </Link>
                  ))}
                </>
              ))}
            </div>
          </Container>
        </section>
        <Container id="atividades-content">
          {atividadesCEFA.map((grupo, grupoIndex) => (
            <div
              id={`section-${grupo.nomeDoGrupo
                .toLowerCase()
                .replace(/ /g, '-')}`}
              className="grupo"
              key={`grupo-${grupoIndex}`}
            >
              <SectionTitle big>{grupoIndex+1}.0 - {grupo.nomeDoGrupo}</SectionTitle>

              <div
                    className="descricao"
                    dangerouslySetInnerHTML={{
                      __html: `${grupo.descricao}`,
                    }}
                  ></div>

              {grupo.atividades.map((atividade, atividadeIndex) => (
                <div
                  key={`${grupo.nomeDoGrupo}-${atividade.nomeDaAtividade}`}
                  className="atividade"
                  id={`${atividade.nomeDaAtividade
                    .toLowerCase()
                    .replace(/ /g, '-')}`}
                >
                  <SectionTitle>{grupoIndex+1}.{atividadeIndex+1} - {atividade.nomeDaAtividade}</SectionTitle>
                  <h3>Horários</h3>
                  {atividade.horarios.map((horario, atividadeIndex) => (
                    <div clasName="horario">
                      <p>
                        {horario.dia} - {horario.horarios}
                      </p>
                    </div>
                  ))}
                  <div
                    className="descricao"
                    dangerouslySetInnerHTML={{
                      __html: `${atividade.descricao}`,
                    }}
                  ></div>
                </div>
              ))}
              
            </div>
          ))}
        </Container>
      </>
    </Layout>
  );
};

export default AtividadesPage;
