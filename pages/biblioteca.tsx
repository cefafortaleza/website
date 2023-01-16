import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";

export default function Biblioteca() {
  return (
    <Layout>
      <div className="bg-bannerBiblioteca block h-[400px] bg-cover" />
      <div className="flex flex-col gap-4 container mx-auto">
        {/* Page Title */}
        <SectionTitle size="large">Biblioteca</SectionTitle>
        <p>
          A Biblioteca Irmão Olívio possui um acervo de livros, revistas e
          periódicos de cunho espírita para leitura e empréstimos aos
          trabalhadores e alunos dos cursos regulares do Centro Espírita
          Francisco de Assis (CEFA).
        </p>

        {/* Horários de Funcionamento */}
        <SectionTitle>Horarios de Funcionamento</SectionTitle>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-[900] text-sm">Sábados e Domingos</p>
            <p>15h às 19:30</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[900] text-sm">2as, 4as, 5as, 6as</p>
            <p>19h às 20:30</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[900] text-sm">Terças</p>
            <p>15h às 20:30</p>
          </div>
        </div>

        {/* Empréstimo de Obras e Prazos */}
        <div className="flex flex-col gap-2 max-w-fit">
          <h2 className="font-[600] text-xl">Empréstimos de Obras e Prazos</h2>
          <span className="w-8 h-1 block bg-black" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Os usuários terão acesso ao acervo nas seguintes modalidades:</p>
          <p>
            - Consulta interna: Obras de referência: Anuários, Bíblia,
            Compêndios, Revistas Encadernadas.
          </p>
          <p>
            - Consulta externa: Uma vez cadastrados, os usuários adquirem o
            direito de retirar como empréstimo até 02 (dois) livros, podendo com
            eles permanecer pelo prazo de 15 (quinze) dias. É possível ainda
            renovar os empréstimos por três vezes, desde que os livros não
            estejam reservados para outra pessoa. Quanto aos periódicos, eles
            podem ser emprestados apenas por 03 (três) dias. Vencido o prazo
            para a devolução, é cobrada uma multa de R$ 0,25 por cada dia de
            atraso.
          </p>
        </div>

        {/* Como Reservar */}
        <SectionTitle>Como Reservar</SectionTitle>

        <p>
          A reserva deverá ser feita diretamente na Biblioteca. A obra reservada
          ficará disponível para o usuário por até 48 horas.
        </p>
      </div>
    </Layout>
  );
}
