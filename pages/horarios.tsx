import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";

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
        <SectionTitle as="h3">1.0 Estudo da Doutrina Espírita</SectionTitle>
        <div className="grid grid-cols-2 max-w-fit gap-4">
          {/* 1.1 - Estudo Preparatório */}
          <div className="p-4 flex flex-col gap-4 border border-black">
            <SectionTitle as="h4">1.1 Estudo Preparatório (EPE)</SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>

          {/* 1.2 - Estudo Preparatório */}
          <div className="p-4 flex flex-col gap-4 border border-black">
            <SectionTitle as="h4">1.2 Estudo Sistematizado da Doutrina Espírita (ESDE)</SectionTitle>
            <div className="flex flex-col gap-2">
              <p>Segunda - 19:30 às 21:00</p>
              <p>Sábado - 17:30 às 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
