import Link from "next/link";

import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";

export default function Atividades() {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8">
        {/* ÍNDICE */}
        <div className="flex flex-col gap-4">
          <p className="font-[600] text-lg">Índice</p>
          {/* 1.0 Estudo da Doutrina Espírita */}
          <p className="font-[600] text-lg">1.0 Estudo da Doutrina Espírita</p>
          <div className="flex flex-col gap-2">
            <Link href="#1.1">
              <span className="text-primary hover:text-[#333] text-sm">
                1.1 Estudo Preparatório (EPE)
              </span>
            </Link>
            <Link href="#1.2">
              <span className="text-primary hover:text-[#333] text-sm">
                1.2 Estudo Sistematizado da Doutrina Espírita (ESDE)
              </span>
            </Link>
            <Link href="#1.3">
              <span className="text-primary hover:text-[#333] text-sm">
                1.3 Estudo Aprofundado da Doutrina Espírita (EADE)
              </span>
            </Link>
            <Link href="#1.4">
              <span className="text-primary hover:text-[#333] text-sm">
                1.4 Estudo de Obras Básicas e Complementares
              </span>
            </Link>
            <Link href="#1.5">
              <span className="text-primary hover:text-[#333] text-sm">
                1.5 Palestras Públicas
              </span>
            </Link>
            <Link href="#1.6">
              <span className="text-primary hover:text-[#333] text-sm">
                1.6 Estudo Sistematizado da Doutrina Espírita
              </span>
            </Link>
          </div>

          {/* 2.0 Atendimento Espiritual */}
          <p className="font-[600] text-lg">2.0 Atendimento Espiritual</p>
          <div className="flex flex-col gap-2">
            <Link href="#2.1">
              <span className="text-primary hover:text-[#333] text-sm">
                2.1 Orientação Fraterna
              </span>
            </Link>
            <Link href="#2.2">
              <span className="text-primary hover:text-[#333] text-sm">
                2.2 Assistência Espiritual
              </span>
            </Link>
            <Link href="#2.3">
              <span className="text-primary hover:text-[#333] text-sm">
                2.3 Passe
              </span>
            </Link>
            <Link href="#2.4">
              <span className="text-primary hover:text-[#333] text-sm">
                2.4 Mediúnicas
              </span>
            </Link>
          </div>

          {/* 3.0 Evengelização Infantojuvenil */}
          <p className="font-[600] text-lg">3.0 Evengelização Infantojuvenil</p>
          <div className="flex flex-col gap-2">
            <Link href="#3.1">
              <span className="text-primary hover:text-[#333] text-sm">
                3.1 Grupo da Família
              </span>
            </Link>
            <Link href="#3.2">
              <span className="text-primary hover:text-[#333] text-sm">
                3.2 Grupo Musical Francisco de Assis
              </span>
            </Link>
            <Link href="#3.3">
              <span className="text-primary hover:text-[#333] text-sm">
                3.3 Eventos e Campanhas
              </span>
            </Link>
          </div>

          {/* 4.0 Ação Social */}
          <p className="font-[600] text-lg">4.0 Ação Social</p>
          <div className="flex flex-col gap-2">
            <Link href="#4.1">
              <span className="text-primary hover:text-[#333] text-sm">
                4.1 Programa Coração Fraterno
              </span>
            </Link>
            <Link href="#4.2">
              <span className="text-primary hover:text-[#333] text-sm">
                4.2 Programa Arte Feliz
              </span>
            </Link>
            <Link href="#4.3">
              <span className="text-primary hover:text-[#333] text-sm">
                4.3 Programa Mão Amiga
              </span>
            </Link>
            <Link href="#4.4">
              <span className="text-primary hover:text-[#333] text-sm">
                4.4 Mediúnicas
              </span>
            </Link>
          </div>
        </div>

        {/* 1.0 Estudo da Doutrina Espírita */}
        <div className="flex flex-col gap-8">
          <SectionTitle size="large" as="h2">
            1.0 - Estudo da Doutrina Espírita
          </SectionTitle>
          {/* 1.1 Estudo Preparatório */}
          <div id="1.1" className="flex flex-col gap-4">
            <SectionTitle as="h3">1.1 - Estudo Preparatório (EPE)</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Estudo inicial, preparatório para o Espiritismo, não sendo
                  pré-requisito para o ESDE, mas, com programa que aborda o
                  surgimento do Espiritismo e seus princípios fundamentais.
                </p>
                <p>
                  O estudo é fundamental para a compreensão e prática do
                  Espiritismo. Este curso é oferecido todas as terças-feiras,
                  das 19h30 às 21h, e objetiva preparar os cursistas até que
                  sejam iniciadas novas turmas dos ESDE I (turma inicial do
                  Estudo Sistematizado da Doutrina Espírita).
                </p>
                <p>
                  Por se tratar de um estudo sistematizado, deve-se iniciar
                  estudando como surgiram os fenômenos que deram origem à
                  codificação, para no decorrer do curso estudarem questões mais
                  aprofundadas da Doutrina dos Espíritos.
                </p>
              </div>
            </div>
          </div>

          {/* 1.2 Estudo Sistematizado da Doutrina Espírita */}
          <div id="1.2" className="flex flex-col gap-4">
            <SectionTitle as="h3">
              1.2 - Estudo Sistematizado da Doutrina Espírita (ESDE)
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Estudo mais elaborado da origem da codificação e dos
                  princípios fundamentais do Espiritismo, tratado em seu
                  tríplice aspecto: científico, filosófico e religioso.
                </p>
                <p>
                  O ESDE oferece uma visão panorâmica e Doutrinária do
                  Espiritismo, fundamentada na ordem dos assuntos existentes em
                  O Livro dos Espíritos, tendo como base as obras codificadas
                  por Allan Kardec e o Evangelho de Jesus.
                </p>
                <p>
                  O conteúdo programático do ESDE está elaborado em três livros,
                  pelos quais se estuda a Doutrina dos Espíritos de maneira
                  regular, metódica e sistemática, durante três anos e meio. As
                  aulas acontecem nas segundas-feiras, das 19h30min às 21h, e
                  aos sábados, das 17h30min às 19h.
                </p>
              </div>
            </div>
          </div>

          {/* 1.3 Estudo Aprofundado da Doutrina Espírita */}
          <div id="1.3" className="flex flex-col gap-4">
            <SectionTitle as="h3">
              1.3 - Estudo Aprofundado da Doutrina Espírita (EADE)
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  O EADE proporciona ao espírita a oportunidade de aprofundar
                  temas que conduzam à reflexão sobre a importância da melhoria
                  moral, tendo em vista o progresso do Espírito,
                  fundamentando-se na Codificação Kardequiana e nas obras
                  complementares da Doutrina Espírita.
                </p>
                <p>
                  Este estudo tem como objetivo ampliar o conhecimento da
                  Doutrina Espírita, em seu tríplice aspecto - científico,
                  filosófico e religioso - e consolidar o conhecimento
                  doutrinário espírita e as diretrizes morais necessárias ao
                  progresso do ser humano, por meio de estudos, leituras,
                  pesquisas, análises, correlações e reflexões de assuntos
                  existentes nas obras espíritas de referência..
                </p>
                <p>
                  No EADE prioriza-se o conhecimento espírita, comparando-o com
                  conhecimentos universais, filosóficos, científicos e
                  tecnológicos, presentes na cultura de vários povos, a fim de
                  demonstrar a relevância e a atualidade do conhecimento da
                  Doutrina Espírita. Nesse contexto, são estudados temas, como:
                  Cristianismo e Espiritismo; Parábolas de Jesus; Espiritismo
                  como o Consolador Prometido por Jesus; e Filosofia e Ciência
                  Espírita.
                </p>
                <p>
                  O curso tem a duração de 05 anos, com estudos que acontecem
                  semanalmente, às segundas-feiras, das 19h30min às 21h, ou aos
                  sábados, das 17h30min às 19h.
                </p>
                <p>
                  Requisitos de admissão: os participantes inscritos devem ter
                  concluído cursos básicos e regulares da Doutrina Espírita,
                  como o Estudo Sistematizado da Doutrina Espírita (ESDE) ou ter
                  conhecimento das obras codificadas por Allan Kardec.
                </p>
              </div>
            </div>
          </div>

          {/* 1.4 Estudo de Obras Básicas e Complementares */}
          <div id="1.4" className="flex flex-col gap-4">
            <SectionTitle as="h3">
              1.4 - Estudo de Obras Básicas e Complementares
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Estudo de obras Espíritas que complementam o conhecimento
                  Doutrinário.
                </p>
              </div>
            </div>
          </div>
          {/* 1.5 Palestras Públicas */}
          <div id="1.5" className="flex flex-col gap-4">
            <SectionTitle as="h3">1.5 - Palestras Públicas</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Quarta - 19:30 às 21:00</p>
                  <p>Sexta - 19:30 às 21:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Estudo mais elaborado da origem da codificação e dos
                  princípios fundamentais do Espiritismo, tratado em seu
                  tríplice aspecto: científico, filosófico e religioso.
                </p>
                <p>
                  Temas da Doutrina Espírita são apresentados todas às quartas e
                  sextas-feiras, sempre às 19h30min. A programação mensal das
                  palestras públicas pode ser vista aqui
                </p>
              </div>
            </div>
          </div>
          {/* 1.6 Estudo Sistematizado da Doutrina Espírita */}
          <div id="1.6" className="flex flex-col gap-4">
            <SectionTitle as="h3">
              1.6 - Estudo Sistematizado da Doutrina Espírita
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] text-[20px] line-height-[29px]">
                  Horários
                </span>
                <div className="flex flex-col gap-2">
                  <p>Quarta - 19:30 às 21:00</p>
                  <p>Sexta - 19:30 às 21:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Momento de difusão e reflexão de ensinamentos da Doutrina
                  Espírita.
                </p>
                <p>
                  Este encontro, que acontece aos domingos, das 18 às 19 horas,
                  tem a finalidade de difundir os ensinamentos da Doutrina
                  Espírita, por meio da leitura e comentário de uma mensagem de
                  contexto moral, de questões de O Livro dos Espíritos e de
                  itens do Evangelho Segundo o Espiritismo.
                </p>
                <p>
                  O encontro conta com a presença do Grupo Musical Francisco de
                  Assis, que harmoniza o ambiente com canções edificantes. Ao
                  final, é oferecido passe espírita aos frequentadores que o
                  desejarem receber.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2.0 Atendimento Espiritual */}
        {/* 3.0 Evangelização Infanto Juvenil */}
        {/* 4.0 Ação Social */}
      </div>
    </Layout>
  );
}
