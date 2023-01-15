import { useState } from "react";
import classnames from "classnames";

const diretoria = [
  {
    label: "Presidente",
    name: "Francisco das Chagas Silveira Reis",
    email: "president@email.com",
  },
  {
    label: "Vice-Presidente",
    name: "Fernanda Maria Caetano Albuquerque",
    email: "president@email.com",
  },
  {
    label: "Tesoureiro",
    name: "José Rodrigues Xavier",
    email: "president@email.com",
  },
  {
    label: "Tesoureiro Adjunto",
    name: "Louis Pasteur Silveira Leite Esmeraldo",
    email: "president@email.com",
  },
  {
    label: "Secretário Geral",
    name: "Edilson Félix Pereira",
    email: "president@email.com",
  },
  {
    label: "Secretário Geral Adjunto",
    name: "Maria Lúcia Pereira Costa Queiroz",
    email: "president@email.com",
  },
];

const conselho = [
  {
    label: "Presidente",
    name: "Hemerson Frederico Costa Lima Soares",
    email: "president@email.com",
  },
  {
    label: "Vice-presidente",
    name: "Hemerson Frederico Costa Lima Soares",
    email: "president@email.com",
  },
  {
    label: "Secretário",
    name: "Paulo Henrique Borges do Vale",
    email: "president@email.com",
  },
  {
    label: "Suplente",
    name: "Leonila Silva Gurgel Nogueira",
    email: "president@email.com",
  },
];

const coordenadores = [
  {
    label: "Mediunidade",
    name: "(vago)",
    email: "",
  },
  {
    label: "Doutrina",
    name: "Maria do Socorro Azevedo Teixeira",
    email: "president@email.com",
  },
  {
    label: "Ação Social",
    name: "(vago)",
    email: "",
  },
  {
    label: "Evangelização Infantojuvenil",
    name: "Márcia Catunda",
    email: "president@email.com",
  },
  {
    label: "Comunicação e Eventos",
    name: "Mariângela do Amaral Saboya",
    email: "president@email.com",
  },
];

type Role = {
  label?: string;
  name?: string;
  email?: string;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("diretoria");

  const changeTab = (newTab: string) => setActiveTab(newTab);

  const generateListFromRoles = (roles: Role[]) =>
    roles.map((role: Role) => (
      <div className="flex justify-between gap-4" key={role.label}>
        <div className="flex gap-4">
          <p className="font-[900] text-[16px]">{role.label}:</p>
          <p className="text-[16px]">{role.name}</p>
        </div>
        <span className="text-[16px]">{role.email}</span>
      </div>
    ));

  return (
    <div className="flex flex-col gap-8">
      {/* Tab Items */}
      <div className="flex">
        {/* Tab 1 */}
        <button
          onClick={() => changeTab("diretoria")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none",
            {
              "text-white bg-primary": activeTab === "diretoria",
              "text-black hover:bg-primary-800": activeTab !== "diretoria",
            }
          )}
        >
          Diretoria Executiva
        </button>
        {/* Tab 2 */}
        <button
          onClick={() => changeTab("conselho")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none",
            {
              "text-white bg-primary": activeTab === "conselho",
              "hover:bg-primary-800": activeTab !== "conselho",
            }
          )}
        >
          Conselho Consultivo Fiscal
        </button>
        {/* Tab 3 */}
        <button
          onClick={() => changeTab("coordenadores")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition",
            {
              "text-white bg-primary": activeTab === "coordenadores",
              "hover:bg-primary-800": activeTab !== "coordenadores",
            }
          )}
        >
          Diretoria Executiva
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "diretoria" && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(diretoria)}
        </div>
      )}
      {activeTab === "conselho" && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(conselho)}
        </div>
      )}
      {activeTab === "coordenadores" && (
        <div className="border w-full max-w-[100%] lg:max-w-[70%] p-8 flex flex-col gap-4">
          {generateListFromRoles(coordenadores)}
        </div>
      )}
    </div>
  );
};

export default Tabs;
