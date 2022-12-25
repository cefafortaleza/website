import Link from "next/link";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* 1 - Table of Contents */}
      {/* Section Title */}
      <div className="container mx-auto flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-2 max-w-fit">
          <h2 className="font-[600] text-3xl">Sobre o CEFA</h2>
          <span className="w-12 h-2 block bg-black" />
        </div>

        <div className="border p-4 flex flex-col gap-4 max-w-fit">
          <span className="text-primary hover:text-[#333]">Índice</span>
          <Link href="#apresentacao">
            <span className="text-primary hover:text-[#333]">Apresentação</span>
          </Link>
          <Link href="#diretoria-conselho-coordenadorias">
            <span className="text-primary hover:text-[#333]">
              Diretoria, Conselho Consultivo Fiscal e Coordenadorias
            </span>
          </Link>
          <Link href="#estatuto">
            <span className="text-primary hover:text-[#333]">Estatuto</span>
          </Link>
          <Link href="#regimento-interno">
            <span className="text-primary hover:text-[#333]">
              Regimento Iterno
            </span>
          </Link>
          <Link href="#localizacao">
            <span className="text-primary hover:text-[#333]">Localização</span>
          </Link>
        </div>

        {/* Apresentação */}
        <div className="flex flex-col gap-4" id="apresentacao">
          <div className="flex flex-col gap-2 max-w-fit">
            <h2 className="font-[600] text-lg">Redes Sociais</h2>
            <span className="w-8 h-1 block bg-black" />
          </div>
          <p>
            O Centro Espírita Francisco de Assis (CEFA) é uma instituição
            religiosa espírita de caráter cultural e filantrópico, que tem como
            objetivos o estudo, a prática e a divulgação do Evangelho de Jesus
            Cristo e da Doutrina Espírita, codificada por Allan Kardec
            (1804-1869).
          </p>

          <p>
            Foi fundado por Olívio Silva, Francisco Inácio da Ponte, Guiomar
            Pires, Aníbal Justa, Francisco Emídio e Mafina Feitosa, em 02 de
            dezembro de 1941, com o nome de Centro Espírita União e Caridade
            Francisco de Assis (CEUCFA). Suas primeiras atividades aconteceram
            em um prédio alugado no Centro de Fortaleza (CE), localizado na Rua
            Barão do Rio Branco, 1741.{" "}
          </p>

          <p>
            Seu primeiro Estatuto foi publicado no Diário Oficial em novembro de
            1942 e registrado em cartório em 02 de dezembro de 1942, conferindo
            ao Centro Espírita personalidade jurídica e descrevendo sua primeira
            Diretoria, composta por: Presidente: Joaquim Maia de Oliveira;
            Vice-Presidente: Antônio Rodrigues de Almeida; 1º Secretário:
            Francisco Barbosa Serra; 2º Secretário: Almerindo Mendonça dos Reis;
            Tesoureiro: Olívio Silva; 2º Tesoureiro: Militão Pinto Pereira; 1º
            Orador: José Mendes Figueiredo; 2º Orador: José Sousa Lima; e,
            Procuradores Gerais: Pedro Carlos Braga e Joventino Gomes Barbosa.{" "}
          </p>

          <p>
            A sua legalização constitui fato de suma importância, tendo em vista
            que as atividades filosóficas e religiosas na senda espírita sofriam
            perseguições na época tanto do Clero Romano como do Governo. Hoje, o
            CEFA possui uma sede própria, localizada na Rua Senador Catunda,
            117, no Bairro Benfica, cuja escritura de compra do terreno data de
            18 de março de 1948. Foram 7 anos de trabalho até a sua inauguração,
            em 23 de julho de 1955. Ainda em obras, o prédio foi visitado em 24
            de novembro de 1950 por Leopoldo Machado - uma das figuras mais
            expressivas do Espiritismo no Brasil -, em sua Caravana da
            Fraternidade, movimento que percorreu os estados do Norte e Nordeste
            com o objetivo de promover uma maior aproximação entre os espíritas
            e divulgar a Doutrina Espírita. Nas palavras do confrade, conforme
            consta no livro “A Caravana da Fraternidade”, de sua autoria e
            publicado pela Federação Espírita Brasileira (FEB), “Fomos visitar a
            sede do Francisco de Assis, ainda em construção. Sede enorme. Um
            mundo de casa, talvez, para abrigar toda Fortaleza espiritista”.
          </p>

          <p>
            Com quase 80 anos de atividades, o CEFA tem influenciado o
            surgimento de vários Centros Espíritas no Ceará, constituindo um
            modelo de referência para o Movimento Espírita cearense.
          </p>
        </div>

        {/* Board */}
        <div className="flex flex-col gap-4" id="diretoria-conselho-coordenadorias">
          <div className="flex flex-col gap-2 max-w-fit">
            <h2 className="font-[600] text-lg">
              Diretoria, Conselho Consultivo Fiscal e Coordenadorias
            </h2>
            <span className="w-8 h-1 block bg-black" />
          </div>
        </div>

        {/* Estatuto */}
        <div className="flex flex-col gap-4" id="estatuto">
          <div className="flex flex-col gap-2 max-w-fit">
            <h2 className="font-[600] text-lg">Estatuto</h2>
            <span className="w-8 h-1 block bg-black" />
          </div>
        </div>

        {/* Regimento Interno */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 max-w-fit">
            <h2 className="font-[600] text-lg">Regimento Interno</h2>
            <span className="w-8 h-1 block bg-black" />
          </div>
        </div>

        {/* Localização */}
        <div className="flex flex-col gap-4" id="localizacao">
          <div className="flex flex-col gap-2 max-w-fit">
            <h2 className="font-[600] text-lg">
              Localização
            </h2>
            <span className="w-8 h-1 block bg-black" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
