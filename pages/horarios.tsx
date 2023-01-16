import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";
import Link from "next/link";

import { HorariosTab } from "../components/Tab";

export default function Horarios() {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8">
        <SectionTitle as="h2">Horários</SectionTitle>
        {/* Horários */}
        <HorariosTab />
        {/* Atividades */}
        <SectionTitle as="h2" size="large">
          Atividades
        </SectionTitle>

        {/* 1.0 - Estudo da Doutrina Espírita */}
        <SectionTitle as="h3">1.0 - Estudo da Doutrina Espírita</SectionTitle>
        <div className="grid grid-cols-2 max-w-fit gap-4">
          {/* 1.1 - Estudo Preparatório (EPE) */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.1 - Estudo Preparatório (EPE)
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.2 - Estudo Preparatório */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.2 - Estudo Sistematizado da Doutrina Espírita (ESDE)
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.3 - Estudo Aprofundado da Doutrina Espírita (EADE) */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.3 - Estudo Aprofundado da Doutrina Espírita (EADE)
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.4 - Estudo de Obras Básicas e Complementares */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.4 - Estudo de Obras Básicas e Complementares
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.5 - Palestras Públicas */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.5 - Palestras Públicas
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Quarta - 19:30 às 21:00</p>
              <p>Sexta - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.6 - Estudo Sistematizado da Doutrina Espírita (ESDE) */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              1.6 - Estudo Sistematizado da Doutrina Espírita (ESDE)
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Quarta - 19:30 às 21:00</p>
              <p>Sexta - 17:30 às 19:00</p>
            </div>
          </div>
        </div>

        {/* 2.0 - Atendimento Espiritual */}
        <SectionTitle as="h3">2.0 - Atendimento Espiritual</SectionTitle>
        <div className="grid grid-cols-2 max-w-fit gap-4">
          {/* 2.1 - Orientação Fraterna */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              2.1 - Orientação Fraterna
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 2.2 - Assistência Espiritual */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              2.2 - Assistência Espiritual
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Domingo - 16:30 às 19:00</p>
              <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
              <p>Quinta - 19:30 às 21:00</p>
            </div>
          </div>

          {/* 2.3 - Passe */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              2.3 - Passe
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Domingo - 16:30 às 19:00</p>
              <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
              <p>Quinta - 19:30 às 21:00</p>
            </div>
          </div>

          {/* 2.4 - Mediúnicas */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              2.4 - Mediúnicas
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Domingo - 16:30 às 19:00</p>
              <p>Terça - 16:30 às 19:00, 19:30 às 21:00</p>
              <p>Quinta - 19:30 às 21:00</p>
            </div>
          </div>
        </div>

        {/* 3.0 - Evangelização Infantojuvenil */}
        <SectionTitle as="h3">3.0 - Evangelização Infantojuvenil</SectionTitle>
        <div className="grid grid-cols-2 max-w-fit gap-4">
          {/* 3.1 - Grupo da Família */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              3.1 - Grupo da Família
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 3.2 - Grupo Musical Filhos de Assis */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              3.2 - Grupo Musical Filhos de Assis
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 3.3 - Eventos e Campanhas */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              3.3 - Eventos e Campanhas
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>
        </div>

        {/* 4.0 - Ação Social */}
        <SectionTitle as="h3">4.0 - Ação Social</SectionTitle>
        <div className="grid grid-cols-2 max-w-fit gap-4">
          {/* Programa Coração Fraterno */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              Programa Coração Fraterno
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 4.2 - Programa Arte Feliz */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              4.2 - Programa Arte Feliz
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 4.3 - Programa Renascer */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              4.3 - Programa Renascer
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 4.4 - Programa Mão Amiga */}
          <div className="p-4 flex flex-col gap-4 border border-black max-w-[350px]">
            <SectionTitle as="h4" size="small">
              4.4 - Programa Mão Amiga
            </SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>
        </div>
        {/* Livraria */}
        <SectionTitle size="large">Livraria</SectionTitle>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <p className="font-[900]">Sábados e Domingos</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">2as, 4as, 5as, 6as</p>
            <p>18:00 às 20:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">Terças</p>
            <p>15:00 às 20:30</p>
          </div>
        </div>
        {/* Biblioteca */}
        <SectionTitle size="large">Biblioteca</SectionTitle>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <p className="font-[900]">Sábados e Domingos</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">2as, 4as, 5as, 6as</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">Terças</p>
            <p>15:00 às 20:30</p>
          </div>
        </div>
        {/* Palestras */}
        <div className="flex flex-col gap-4">
          <SectionTitle size="large">Palestras</SectionTitle>
          <Link href="/palestras">
            <span className="text-primary hover:text-[#333]">
              Clique aqui para ver os horários das próximas palestras!
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
