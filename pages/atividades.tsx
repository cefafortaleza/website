import Link from "next/link";

import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";

export default function Atividades() {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        {/* ÍNDICE */}
        <div className="flex flex-col gap-4">
          <p className="font-[600] ">Índice</p>
          {/* 1.0 Estudo da Doutrina Espírita */}
          <p className="font-[600] ">1.0 Estudo da Doutrina Espírita</p>
          <div className="flex flex-col gap-2">
            <Link href="#1.1">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.1 Estudo Preparatório (EPE)
              </span>
            </Link>
            <Link href="#1.2">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.2 Estudo Sistematizado da Doutrina Espírita (ESDE)
              </span>
            </Link>
            <Link href="#1.3">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.3 Estudo Aprofundado da Doutrina Espírita (EADE)
              </span>
            </Link>
            <Link href="#1.4">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.4 Estudo de Obras Básicas e Complementares
              </span>
            </Link>
            <Link href="#1.5">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.5 Palestras Públicas
              </span>
            </Link>
            <Link href="#1.6">
              <span className=" text-primary hover:text-[#333] text-sm">
                1.6 Estudo Sistematizado da Doutrina Espírita
              </span>
            </Link>
          </div>

          {/* 2.0 Atendimento Espiritual */}
          <p className="font-[600] ">2.0 Atendimento Espiritual</p>
          <div className="flex flex-col gap-2">
            <Link href="#2.1">
              <span className=" text-primary hover:text-[#333] text-sm">
                2.1 Orientação Fraterna
              </span>
            </Link>
            <Link href="#2.2">
              <span className=" text-primary hover:text-[#333] text-sm">
                2.2 Assistência Espiritual
              </span>
            </Link>
            <Link href="#2.3">
              <span className=" text-primary hover:text-[#333] text-sm">
                2.3 Passe
              </span>
            </Link>
            <Link href="#2.4">
              <span className=" text-primary hover:text-[#333] text-sm">
                2.4 Mediúnicas
              </span>
            </Link>
          </div>

          {/* 3.0 Evengelização Infantojuvenil */}
          <p className="font-[600] ">3.0 Evengelização Infantojuvenil</p>
          <div className="flex flex-col gap-2">
            <Link href="#3.1">
              <span className=" text-primary hover:text-[#333] text-sm">
                3.1 Grupo da Família
              </span>
            </Link>
            <Link href="#3.2">
              <span className=" text-primary hover:text-[#333] text-sm">
                3.2 Grupo Musical Francisco de Assis
              </span>
            </Link>
            <Link href="#3.3">
              <span className=" text-primary hover:text-[#333] text-sm">
                3.3 Eventos e Campanhas
              </span>
            </Link>
          </div>

          {/* 4.0 Ação Social */}
          <p className="font-[600] ">4.0 Ação Social</p>
          <div className="flex flex-col gap-2">
            <Link href="#4.1">
              <span className=" text-primary hover:text-[#333] text-sm">
                4.1 Programa Coração Fraterno
              </span>
            </Link>
            <Link href="#4.2">
              <span className=" text-primary hover:text-[#333] text-sm">
                4.2 Programa Arte Feliz
              </span>
            </Link>
            <Link href="#4.3">
              <span className=" text-primary hover:text-[#333] text-sm">
                4.3 Programa Mão Amiga
              </span>
            </Link>
            <Link href="#4.4">
              <span className=" text-primary hover:text-[#333] text-sm">
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
                <span className="font-[900] ">Horários</span>
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
                <span className="font-[900] ">Horários</span>
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
                <span className="font-[900] ">Horários</span>
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
                <span className="font-[900] ">Horários</span>
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
                <span className="font-[900] ">Horários</span>
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
                <span className="font-[900] ">Horários</span>
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
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionTitle size="large" as="h2">
              2.0 - Atendimento Espiritual
            </SectionTitle>
            <p>
              É o conjunto de procedimentos destinados a assistir às pessoas que
              buscam auxílio Espiritual, tendo como base o estudo do Evangelho.
              Inicia-se pela Orientação Fraterna, e consiste, também, de
              Assistência Espiritual, Passe, Água Fluidificada, Irradiação e
              Evangelho no Lar.
            </p>
          </div>

          {/* 2.1 Orientação Fraterna */}
          <div id="2.1" className="flex flex-col gap-4">
            <SectionTitle as="h3">2.1 - Orientação Fraterna</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  A Orientação Fraterna consiste em uma conversa reservada com
                  um orientador do CEFA, na qual o assistido pode expor as
                  questões que o afligem.
                </p>
              </div>
            </div>
          </div>

          {/* 2.2 Assitência Espiritual */}
          <div id="2.2" className="flex flex-col gap-4">
            <SectionTitle as="h3">2.2 - Assistência Espiritual</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Domingo - 16:30 às 19:00</p>
                  <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
                  <p>Quinta - 19:30 às 21:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  A assistência espiritual consiste no encontro fraterno em
                  torno do Evangelho de Jesus, cujo propósito é nos ajudar a
                  entender as origens de nossas aflições, angústias, dores,
                  enfermidades, ajudando-nos a descobrir como encontrar a cura.
                </p>
                <p>
                  A primeira etapa da Assistência Espiritual é a Orientação
                  Fraterna, uma conversa reservada com um orientador fraterno do
                  CEFA, na qual o assistido pode expor as questões que o
                  afligem. A partir dessa entrevista, poderá ser direcionado a
                  um dos Grupos de Estudos do Evangelho, que se reúnem em
                  encontros de estudos semanais. Ao fim de cinco semanas, o
                  assistido volta para uma reentrevista com um orientador
                  fraterno, para avaliar a necessidade de continuar nos
                  encontros semanais.
                </p>
                <p>
                  O Estudo do Evangelho, feito em grupo, tem a duração de uma
                  hora e meia e consiste na leitura e discussão de um trecho de
                  O Evangelho Segundo o Espiritismo. Mediado por um monitor do
                  CEFA, que estimula a reflexão sobre o tema abordado, esse
                  estudo objetiva orientar nosso comportamento aos ensinamentos
                  morais praticados por Jesus.
                </p>
                <p>
                  A Orientação Fraterna acontece todos os dias. Já a Assistência
                  Espiritual funciona aos domingos, às 16h30min, nas terças, às
                  16h30 ou às 19h30min, e nas quintas-feiras, às 19h30min.
                </p>
              </div>
            </div>
          </div>

          {/* 2.3 Passe */}
          <div id="2.3" className="flex flex-col gap-4">
            <SectionTitle as="h3">2.3 - Passe</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Domingo - 16:30 às 19:00</p>
                  <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
                  <p>Quinta - 19:30 às 21:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  A Orientação Fraterna consiste em uma conversa reservada com
                  um orientador do CEFA, na qual o assistido pode expor as
                  questões que o afligem.
                </p>
                <p>
                  O Passe é a doação de energias benéficas aos encarnados, sendo
                  também um complemento à Assistência Espiritual. Para melhor
                  efeito, os passes devem ser tomados após o estudo do
                  Evangelho.
                </p>
                <p>
                  Segundo o Dicionário Houaiss da Língua Portuguesa, a palavra
                  passe significa, entre outros conceitos, “ato de passar as
                  mãos repetidas vezes por diante ou por cima de pessoa que se
                  pretende magnetizar ou curar pela força mediúnica”.
                </p>
                <p>
                  A Doutrina Espirita amplia este conceito e define o Passe como
                  uma transmissão conjunta, ou mista, de fluidos magnéticos –
                  provenientes do encarnado – e de fluidos espirituais –
                  oriundos dos benfeitores espirituais, não devendo ser
                  considerada uma simples transmissão de energia animal
                  (magnetização).
                </p>
                <p>
                  Ao substituir os fluidos deletérios por fluidos benéficos, o
                  Passe torna-se aliado eficaz para sanar desarmonias físicas e
                  psíquicas, equilibrar o funcionamento de células e tecidos
                  lesados, e para promover a harmonização do funcionamento
                  neurológico, que garante o estado de lucidez mental e
                  intelectual do indivíduo.
                </p>
                <p>
                  O passe é, usualmente, transmitido pelas mãos, mas também pode
                  ser feito pelo olhar, pelo sopro ou à distância, por
                  intermédio das irradiações mentais.
                </p>
                <p>
                  A transmissão e a recepção do passe guardam relação com o
                  poder da vontade de quem doa as energias benéficas e de quem
                  as recebe.
                </p>
                <p>
                  No contexto Espírita, o passe deve ser entendido como um
                  auxiliar importante aos recursos terapêuticos comuns. É,
                  portanto, um meio, e não a finalidade do Espiritismo.
                </p>
                <p>
                  Muitas pessoas procuram no passe a cura ou a melhora de seus
                  males físicos, psíquicos ou distúrbios espirituais. O passe,
                  de fato, ajuda, mas não deve ser considerado como terapia
                  única; a melhor terapia é o estudo e a prática do Evangelho de
                  Jesus.
                </p>
                <p>
                  O CEFA oferece, anualmente, o curso de formação para
                  trabalhadores do passe, para o qual é exigido que o
                  interessado tenha concluído o segundo módulo do Estudo
                  Sistematizado da Doutrina Espírita (ESDE).
                </p>
                <p className="text-[13px] leading-[29px]">
                  Fonte: Estudo sobre o passe: Passe na reunião Mediúnica, Marta
                  Antunes Moura/FEB, 2004
                </p>
                <SectionTitle as="h3" size="small">
                  Água Fluidificada
                </SectionTitle>
                <p>
                  Água acrescida de fluidos espirituais, destinada à
                  complementação da Assistência Espiritual.
                </p>
                <SectionTitle as="h3" size="small">
                  Irradiação
                </SectionTitle>
                <p>
                  Procedimento realizado com o auxílio dos bons espíritos, que
                  consiste na transmissão de energias sutis, recebidas dos
                  Espíritos benfeitores pelos médiuns na casa espirita e
                  dirigidas aos assistidos através da vibração realizada pelo
                  pensamento e a vontade.
                </p>
                <SectionTitle as="h3" size="small">
                  Evangelho do Lar
                </SectionTitle>
                <p>
                  Procedimento realizado no Lar de cada assistido ou espirita,
                  que consiste no estudo, pelo menos semanal, de uma passagem do
                  Evangelho, e que teve sua origem nas reuniões realizadas por
                  Jesus na casa de Pedro, segundo o Livro Jesus no Lar, de
                  autoria do espírito Neio Lúcio, psicografado por Francisco
                  Cândido Xavier.
                </p>
              </div>
            </div>
          </div>

          {/* 2.4 Mediúnicas */}
          <div id="2.1" className="flex flex-col gap-4">
            <SectionTitle as="h3">2.4 - Mediúnicas</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Domingo - 16:30 às 19:00</p>
                  <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
                  <p>Quinta - 19:30 às 21:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  A Orientação Fraterna consiste em uma conversa reservada com
                  um orientador do CEFA, na qual o assistido pode expor as
                  questões que o afligem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3.0 Evangelização Infanto Juvenil */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionTitle size="large" as="h2">
              3.0 - Evangelização Infantojuvenil
            </SectionTitle>
            <p>
              A Evangelização Infantojuvenil objetiva promover a integração do
              evangelizando consigo mesmo, com o próximo e com Deus,
              oferecendo-lhe, assim, a oportunidade de se perceber como ser
              integral a caminho da evolução neste planeta.
            </p>
            <p>
              As atividades acontecem aos sábados, das 15h às 17h. Os
              participantes são acompanhados por monitores, em turmas que
              respeitam determinadas faixas etárias dos participantes, conforme
              quadro abaixo:
            </p>
            <table className="table-auto max-w-md">
              <thead>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Turmas</td>
                  <td className="p-[2px] pl-[4px] ">Faixa Etária</td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Maternalzinho</td>
                  <td className="p-[2px] pl-[4px] ">Meses a 2 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Maternal</td>
                  <td className="p-[2px] pl-[4px] ">3 e 4 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Jardim</td>
                  <td className="p-[2px] pl-[4px] ">5 e 6 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Ciclo I</td>
                  <td className="p-[2px] pl-[4px] ">7 e 8 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Ciclo II</td>
                  <td className="p-[2px] pl-[4px] ">9 e 10 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Pré Juventude</td>
                  <td className="p-[2px] pl-[4px] ">11 e 12 anos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-[2px] pl-[4px] border-r ">Juventude</td>
                  <td className="p-[2px] pl-[4px] ">13 a 21 anos</td>
                </tr>
              </tbody>
            </table>
            <p>
              Em todas as turmas o estudo doutrinário e evangélico é adaptado à
              faixa etária do evangelizando, com metodologia apropriada,
              considerando, também, o enfoque lúdico.
            </p>
            <p>
              Ao final do estudo, as crianças e os familiares, ou responsáveis,
              que o acompanham participam do passe.
            </p>
          </div>

          {/* 3.1 - Grupo da Família */}
          <div id="3.1" className="flex flex-col gap-4">
            <SectionTitle as="h3">3.1 - Grupo da Família</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Paralelamente aos estudos das crianças e dos jovens da
                  Evangelização Infantojuvenil, os pais e responsáveis também
                  são acompanhados por monitores no Grupo da Família,
                  participando de estudos do Evangelho e de temas referentes à
                  relação familiar, visando ao equilíbrio e à harmonia na
                  família.
                </p>
              </div>
            </div>
          </div>

          {/* 3.2 - Grupo da Família */}
          <div id="3.2" className="flex flex-col gap-4">
            <SectionTitle as="h3">
              3.2 - Grupo Musical Filhos de Assis
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  O Grupo Musical Filhos de Assis reúne evangelizandos e
                  convidados, que são estimulados e acompanhados por monitores
                  no exercício musical e na convivência harmônica, tendo como
                  base os ensinamentos de Jesus. Os ensaios acontecem antes da
                  Evangelização, preparando o grupo para harmonizar a Hora da
                  Prece no quinto domingo do mês.
                </p>
              </div>
            </div>
          </div>

          {/* 3.3 - Grupo da Família */}
          <div id="3.3" className="flex flex-col gap-4">
            <SectionTitle as="h3">3.3 - Eventos e Campanhas</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  A Coordenadoria da Evangelização Infantojuvenil promove,
                  também, eventos que visam a integração e o aprofundamentos em
                  temas específicos para cada grupo, além de arrecadar donativos
                  para campanhas assistenciais, tais como:
                </p>
                <p className="font-[900] ">- Encontro da Família</p>
                <p>
                  tarde de estudos sobre temáticas referentes à família.
                  Relaciona-se diretamente ao Grupo da Família, mas é aberto ao
                  público. Essa atividade visa arrecadar leite para doação a
                  instituições beneficentes.
                </p>
                <p className="font-[900] ">- Seminário da Juventude</p>
                <p>
                  Reúne a juventude espírita para estudo de temas relacionados
                  aos interesses, necessidades e cotidiano dos jovens, à luz da
                  Doutrina Espírita.
                </p>
                <p className="font-[900] ">- Festival de Artes</p>
                <p>
                  Os evangelizandos apresentam números artísticos, de cunho
                  doutrinário/evangélico, e se divertem saboreando muito
                  sorvete, contribuindo, em contrapartida, com a doação de
                  brinquedos, que são distribuídos para crianças carentes, no
                  Natal.
                </p>
                <p className="font-[900] ">- Natal Solidário</p>
                <p>
                  Visitas a instituições de assistência a crianças, adolescentes
                  ou idosos, levando alimentos e brinquedos que são arrecadados.
                </p>
                <p className="font-[900] ">
                  - Projeto &quot;Ouça a voz do coração&quot;
                </p>
                <p>
                  Nesta atividade, os participantes do Grupo Musical Filhos de
                  Assis, juntamente com a turma da juventude e os pais, visitam
                  instituições beneficentes levando doações, música e suas
                  melhores vibrações.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 4.0 Ação Social */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionTitle size="large" as="h2">
              4.0 - Ação Social
            </SectionTitle>
            <p>
              As atividades de Ação Social desenvolvidas no CEFA foram agrupadas
              em programas, por identidade de propósito:
            </p>
          </div>

          {/* 4.1 - Grupo da Família */}
          <div id="4.1" className="flex flex-col gap-4">
            <SectionTitle as="h3">4.1 - Programa Coração Fraterno</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Programa voltado ao acolhimento de idosos e população em
                  situação de vulnerabilidade, auxiliando-os materialmente e,
                  principalmente, espiritualmente, visando a sua promoção social
                  e o seu crescimento moral, independente de credos.
                </p>
                <p>
                  Especificamente para os idosos, é desenvolvido um programa de
                  encontros quinzenais, nos segundos e quartos domingos de cada
                  mês, com atividades diversas que objetivam instruir - por meio
                  de palestras - e entreter - com atividades lúdicas e de
                  relaxamento - os participantes.
                </p>
                <p>
                  Além de lanches, os 94 idosos cadastrados recebem,
                  mensalmente, uma cesta básica, composta a partir de doações de
                  voluntários e frequentadores do CEFA.
                </p>
              </div>
            </div>
          </div>

          {/* 4.2 - Programa Arte Feliz */}
          <div id="4.2" className="flex flex-col gap-4">
            <SectionTitle as="h3">4.2 - Programa Coração Fraterno</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Programa voltado ao desenvolvimento de atividades de arte com
                  idosos, população em situação de vulnerabilidade e comunidades
                  circunvizinhas.
                </p>
                <p>
                  As atividades são desenvolvidas em salas de leitura, oficinas
                  de crochê, tapeçaria, bordado, pintura, reciclagem e música.
                </p>
                <p>
                  Além de lanches, os 94 idosos cadastrados recebem,
                  mensalmente, uma cesta básica, composta a partir de doações de
                  voluntários e frequentadores do CEFA.
                </p>
              </div>
            </div>
          </div>

          {/* 4.3 - Programa Renascer */}
          <div id="4.3" className="flex flex-col gap-4">
            <SectionTitle as="h3">4.3 - Programa Renascer</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Programa voltado ao acolhimento e à orientação de gestantes.
                </p>
              </div>
            </div>
          </div>

          {/* 4.4 - Programa Mão Amiga */}
          <div id="4.4" className="flex flex-col gap-4">
            <SectionTitle as="h3">4.4 - Programa Mão Amiga</SectionTitle>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-[900] ">Horários</span>
                <div className="flex flex-col gap-2">
                  <p>Segunda - 19:30 às 21:00</p>
                  <p>Sábado - 17:30 às 19:00</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Programa voltado ao desenvolvimento de atividades relacionadas
                  a visitas a creches, casas de acolhimento de idoso, casas de
                  recuperação. Nas visitas, são doados materiais de higiene
                  pessoal e de limpeza, além de alimentos não perecíveis e
                  roupas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
