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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("diretoria");

  const changeTab = (newTab) => setActiveTab(newTab);

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
        <div className="border w-full max-w-[70%] p-8">
          {diretoria.map((role) => (
            <div className="flex justify-between gap-4" key={role.label}>
              <div className="flex gap-4">
                <p className="min-w-">{role.label}:</p>
                <p>{role.name}</p>
              </div>
              <span>{role.email}</span>
            </div>
          ))}
        </div>
      )}
      {activeTab === "conselho" && <div>Diretoria</div>}
      {activeTab === "coordenadores" && <div>Diretoria</div>}
    </div>
  );
};

export default Tabs;
