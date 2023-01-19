import Link from "next/link";

import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { SobreTab } from "../components/Tab";

export default function Sobre() {
  function getCEFAMap() {
    if (typeof window === "undefined") return;
    return window.innerWidth > 768
      ? {
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="1200" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
        }
      : {
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
        };
  }

  return (
    <Layout>
      {/* 1 - Table of Contents */}
      {/* Section Title */}
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        <SectionTitle size="large">Sobre o Cefa</SectionTitle>

        <div className="border p-4 flex flex-col gap-4 max-w-fit">
          <span>Índice</span>
          <Link href="#apresentacao">
            <span className="text-primary hover:text-[#333]">
              1. Apresentação
            </span>
          </Link>
          <Link href="#diretoria-conselho-coordenadorias">
            <span className="text-primary hover:text-[#333]">
              2. Diretoria, Conselho Consultivo Fiscal e Coordenadorias
            </span>
          </Link>
          <Link href="#estatuto">
            <span className="text-primary hover:text-[#333]">3. Estatuto</span>
          </Link>
          <Link href="#regimento-interno">
            <span className="text-primary hover:text-[#333]">
              4. Regimento Iterno
            </span>
          </Link>
          <Link href="#localizacao">
            <span className="text-primary hover:text-[#333]">
              5. Localização
            </span>
          </Link>
        </div>

        {/* Apresentação */}
        <div className="flex flex-col gap-4" id="apresentacao">
          <SectionTitle>Apresentação</SectionTitle>
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
        <div
          className="flex flex-col gap-4"
          id="diretoria-conselho-coordenadorias"
        >
          <SectionTitle>
            Diretoria, Conselho Consultivo Fiscal e Coordenadorias
          </SectionTitle>

          <SobreTab />
        </div>

        {/* Estatuto */}
        <div className="flex flex-col gap-4" id="estatuto">
          <SectionTitle>Estatuto</SectionTitle>
          <a href="/ESTATUTO.pdf" download>
            <span className="text-primary hover:text-[#333] hover:underline text-lg">
              Download
            </span>
          </a>
        </div>

        {/* Regimento Interno */}
        <div className="flex flex-col gap-4">
          <SectionTitle>Regimento Interno</SectionTitle>

          <a href="/REGIMENTO.docx" download>
            <span className="text-primary hover:text-[#333] hover:underline text-lg">
              Download!
            </span>
          </a>
        </div>

        {/* Localização */}
        <div className="flex flex-col gap-4" id="localizacao">
          <SectionTitle>Localização</SectionTitle>

          <div className="flex flex-col gap-4">
            <p className="flex gap-4">
              Telefone:{" "}
              <Link href={`tel:+448432216163}`}>
                {" "}
                <span className="text-primary hover:text-[#333] hover:underline text-lg">
                  (85) 3221 6163
                </span>
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex gap-4">
              Email:{" "}
              <span className="text-primary hover:text-[#333] hover:underline text-lg">
                <Link href={`mailto:contato@cefafortaleza.com.br`}>
                  contato@cefafortaleza.com.br
                </Link>
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            {/* Instagram */}
            <div className="flex items-center justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/cefafortaleza/"
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2711 7.53709C10.388 7.53709 7.25584 10.6431 7.25584 14.4939C7.25584 18.3447 10.388 21.4508 14.2711 21.4508C18.1543 21.4508 21.2864 18.3447 21.2864 14.4939C21.2864 10.6431 18.1543 7.53709 14.2711 7.53709ZM14.2711 19.0168C11.7617 19.0168 9.71027 16.9885 9.71027 14.4939C9.71027 11.9994 11.7556 9.97107 14.2711 9.97107C16.7866 9.97107 18.832 11.9994 18.832 14.4939C18.832 16.9885 16.7805 19.0168 14.2711 19.0168ZM23.2097 7.25251C23.2097 8.15466 22.477 8.87517 21.5734 8.87517C20.6637 8.87517 19.9371 8.14861 19.9371 7.25251C19.9371 6.35642 20.6698 5.62986 21.5734 5.62986C22.477 5.62986 23.2097 6.35642 23.2097 7.25251ZM27.856 8.89939C27.7522 6.72576 27.2516 4.80037 25.6458 3.21404C24.0461 1.62771 22.1046 1.13123 19.9127 1.02224C17.6536 0.895093 10.8825 0.895093 8.62348 1.02224C6.43769 1.12517 4.49612 1.62166 2.89036 3.20798C1.2846 4.79431 0.790047 6.7197 0.680147 8.89334C0.55193 11.1336 0.55193 17.8482 0.680147 20.0885C0.783942 22.2621 1.2846 24.1875 2.89036 25.7738C4.49612 27.3601 6.43159 27.8566 8.62348 27.9656C10.8825 28.0927 17.6536 28.0927 19.9127 27.9656C22.1046 27.8627 24.0461 27.3662 25.6458 25.7738C27.2454 24.1875 27.7461 22.2621 27.856 20.0885C27.9842 17.8482 27.9842 11.1396 27.856 8.89939ZM24.9375 22.4922C24.4613 23.6789 23.5394 24.5931 22.3366 25.0715C20.5354 25.7799 16.2615 25.6164 14.2711 25.6164C12.2807 25.6164 8.00072 25.7738 6.20568 25.0715C5.00899 24.5992 4.08705 23.6849 3.60471 22.4922C2.89036 20.706 3.05521 16.4677 3.05521 14.4939C3.05521 12.5201 2.89647 8.27576 3.60471 6.49568C4.08095 5.30896 5.00288 4.3947 6.20568 3.91638C8.00682 3.20798 12.2807 3.37146 14.2711 3.37146C16.2615 3.37146 20.5415 3.21404 22.3366 3.91638C23.5333 4.38865 24.4552 5.30291 24.9375 6.49568C25.6519 8.28181 25.487 12.5201 25.487 14.4939C25.487 16.4677 25.6519 20.7121 24.9375 22.4922Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            {/* Facebook */}
            <div className="flex items-center justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/CefaFortaleza"
              >
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M24.4223 1.9375H2.93067C2.15341 1.9375 1.40798 2.24369 0.858374 2.78872C0.308766 3.33375 0 4.07296 0 4.84375L0 26.1562C0 26.927 0.308766 27.6663 0.858374 28.2113C1.40798 28.7563 2.15341 29.0625 2.93067 29.0625H11.3106V19.8406H7.46406V15.5H11.3106V12.1917C11.3106 8.42873 13.5696 6.35016 17.0296 6.35016C18.6867 6.35016 20.4195 6.6432 20.4195 6.6432V10.3366H18.5102C16.6291 10.3366 16.0424 11.4942 16.0424 12.6815V15.5H20.2418L19.5702 19.8406H16.0424V29.0625H24.4223C25.1995 29.0625 25.945 28.7563 26.4946 28.2113C27.0442 27.6663 27.3529 26.927 27.3529 26.1562V4.84375C27.3529 4.07296 27.0442 3.33375 26.4946 2.78872C25.945 2.24369 25.1995 1.9375 24.4223 1.9375Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="27.3529" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            {/* Youtube */}
            <div className="flex items-center justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/user/CEFA1941"
              >
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.2389 4.51284C31.8611 3.0809 30.7479 1.95316 29.3345 1.57044C26.7727 0.875 16.5 0.875 16.5 0.875C16.5 0.875 6.22739 0.875 3.66549 1.57044C2.25212 1.95322 1.13896 3.0809 0.761153 4.51284C0.074707 7.1083 0.074707 12.5235 0.074707 12.5235C0.074707 12.5235 0.074707 17.9387 0.761153 20.5341C1.13896 21.9661 2.25212 23.0468 3.66549 23.4296C6.22739 24.125 16.5 24.125 16.5 24.125C16.5 24.125 26.7726 24.125 29.3345 23.4296C30.7479 23.0468 31.8611 21.9661 32.2389 20.5341C32.9253 17.9387 32.9253 12.5235 32.9253 12.5235C32.9253 12.5235 32.9253 7.1083 32.2389 4.51284ZM13.1403 17.4401V7.6069L21.7262 12.5236L13.1403 17.4401Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div dangerouslySetInnerHTML={getCEFAMap()} />
          <div>
            <p>Rua Senador Catunda, 117 - Benfica, Fortaleza - CE, 60015-320</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
