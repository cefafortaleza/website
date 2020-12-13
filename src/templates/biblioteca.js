import React from 'react';

import Layout from '../components/Layout';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import PageHeader from '../components/PageHeader';

const BibliotecaPage = () => {
  return (
    <Layout>
      <PageHeader id="page-header-biblioteca" background="../img/section-background-biblioteca.png" />
      <Container>
        <SectionTitle big>Biblioteca</SectionTitle>
        
        <p>
          A Biblioteca Irmão Olívio possui um acervo de livros, revistas e
          periódicos de cunho espírita para leitura e empréstimos aos
          trabalhadores e alunos dos cursos regulares do Centro Espírita
          Francisco de Assis (CEFA).
        </p>
        <SectionTitle>Horários de funcionamento</SectionTitle>
        <div className="horarios-biblioteca">
          <div className="horario">
            <p className="bold">Sábados e Domingos</p>
            <p>15h às 19:30</p>
          </div>
          <div className="horario">
            <p className="bold">2as, 4as, 5as, 6as</p>
            <p>19h às 20:30</p>
          </div>
          <div className="horario">
            <p className="bold">Terças</p>
            <p>15 às 20:30</p>
          </div>
        </div>
        <SectionTitle>Empréstimos de Obras e Prazos</SectionTitle>
        <p>Os usuários terão acesso ao acervo nas seguintes modalidades: </p>
        <p>
          - Consulta interna: Obras de referência: Anuários, Bíblia, Compêndios,
          Revistas Encadernadas.
        </p>
        <p>
          - Consulta externa: Uma vez cadastrados, os usuários adquirem o
          direito de retirar como empréstimo até 02 (dois) livros, podendo com
          eles permanecer pelo prazo de 15 (quinze) dias. É possível ainda
          renovar os empréstimos por três vezes, desde que os livros não estejam
          reservados para outra pessoa. Quanto aos periódicos, eles podem ser
          emprestados apenas por 03 (três) dias. Vencido o prazo para a
          devolução, é cobrada uma multa de R$ 0,25 por cada dia de atraso.
        </p>
        <SectionTitle>Como Reservar</SectionTitle>
        <p>
          A reserva deverá ser feita diretamente na Biblioteca. A obra reservada
          ficará disponível para o usuário por até 48 horas.
        </p>
      </Container>
    </Layout>
  );
};

export default BibliotecaPage;
