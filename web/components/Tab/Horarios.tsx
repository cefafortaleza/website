import { useState } from "react";
import classnames from "classnames";

type Activity = {
  value?: string;
  label?: string;
};

type DailyActivities = {
  man?: Activity[];
  tar?: Activity[];
  noi?: Activity[];
};

type WeeklyActivities = {
  dom: DailyActivities;
  seg: DailyActivities;
  ter: DailyActivities;
  qua: DailyActivities;
  qui: DailyActivities;
  sex: DailyActivities;
  sab: DailyActivities;
};

export default function Tabs() {
  const horarios: WeeklyActivities = {
    dom: {
      man: [],
      tar: [
        {
          value: "16:00",
          label: "Estudo das Mediúnicas",
        },
        {
          value: "16:30",
          label: "Atendimento Espiritual - AE",
        },
      ],
      noi: [
        {
          value: "18:00",
          label: "Hora da Prece",
        },
      ],
    },
    seg: {
      man: [],
      tar: [],
      noi: [
        {
          value: "19:00 às 20:00",
          label: "Orientação Fraterna",
        },
        {
          value: "19:30",
          label: "Estudos Doutrinatários (ESDE e EADE)",
        },
      ],
    },
    ter: {
      man: [],
      tar: [
        {
          value: "16:00 às 20:30",
          label: "Orientação Fraterna",
        },
        {
          value: "16:00",
          label: "Estudos das Mediúnicas",
        },
      ],
      noi: [
        {
          value: "19:00",
          label: "Estudos das Mediúnicas",
        },
        {
          value: "19:30",
          label: "Atendimento Espiritual - AE / Passe Virtual",
        },
      ],
    },
    qua: {
      man: [],
      tar: [],
      noi: [
        {
          value: "19:00 às 20:00",
          label: "Orientação Fraterna",
        },
      ],
    },
    qui: {
      man: [],
      tar: [],
      noi: [
        {
          value: "18:00 às 20:00",
          label: "Orientação Fraterna",
        },
        {
          value: "19:00",
          label: "Estudo das Mediúnicas",
        },
        {
          value: "19:30",
          label: "Atendimento Espiritual - AE / Passe Virtual",
        },
      ],
    },
    sex: { man: [], tar: [], noi: [] },
    sab: {
      man: [],
      tar: [
        {
          value: "15:00",
          label: "Evangelização Infantojuvenil / Passe Virtual",
        },
        {
          value: "17:30",
          label: "Estudos Doutrinatários (ESDE e EADE)",
        },
      ],
      noi: [],
    },
  };

  type DaysOfWeek = "dom" | "seg" | "ter" | "qua" | "qui" | "sex" | "sab";

  const [activeTab, setActiveTab] = useState<DaysOfWeek>("dom");

  const changeTab = (newTab: DaysOfWeek) => setActiveTab(newTab);

  const renderTabContent = () => (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Manhã</p>
        {activeTab &&
          horarios[activeTab].man &&
          horarios[activeTab]?.man?.map(({ value, label }: Activity) => (
            <div className="flex gap-2" key={label}>
              <p className="font-[900]">{value}</p>
              <p>{label}</p>
            </div>
          ))}
      </div>
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Tarde</p>
        {activeTab &&
          horarios[activeTab].tar &&
          horarios[activeTab]?.tar?.map(({ value, label }: Activity) => (
            <div className="flex gap-2" key={label}>
              <p className="font-[900]">{value}</p>
              <p>{label}</p>
            </div>
          ))}
      </div>
      <div className="w-full p-4 border border-black">
        <p className="font-[900]">Noite</p>
        {activeTab &&
          horarios[activeTab].noi &&
          horarios[activeTab]?.noi?.map(({ value, label }: Activity) => (
            <div className="flex gap-2" key={label}>
              <p className="font-[900]">{value}</p>
              <p>{label}</p>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Tabs */}
      <div className="flex overflow-scroll">
        <button
          onClick={() => changeTab("dom")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "dom",
              "text-black hover:bg-primary-800": activeTab !== "dom",
            }
          )}
        >
          Domingo
        </button>
        <button
          onClick={() => changeTab("seg")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "seg",
              "text-black hover:bg-primary-800": activeTab !== "seg",
            }
          )}
        >
          Segunda
        </button>
        <button
          onClick={() => changeTab("ter")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "ter",
              "text-black hover:bg-primary-800": activeTab !== "ter",
            }
          )}
        >
          Terça
        </button>
        <button
          onClick={() => changeTab("qua")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "qua",
              "text-black hover:bg-primary-800": activeTab !== "qua",
            }
          )}
        >
          Quarta
        </button>
        <button
          onClick={() => changeTab("qui")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "qui",
              "text-black hover:bg-primary-800": activeTab !== "qui",
            }
          )}
        >
          Quinta
        </button>
        <button
          onClick={() => changeTab("sab")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "sab",
              "text-black hover:bg-primary-800": activeTab !== "sab",
            }
          )}
        >
          Sexta
        </button>
        <button
          onClick={() => changeTab("sab")}
          className={classnames(
            "w-full border border-black p-4 font-[600]  hover:text-white text-xl transition border-r-none text-[20px] leading-[29px]",
            {
              "text-white bg-primary": activeTab === "sab",
              "text-black hover:bg-primary-800": activeTab !== "sab",
            }
          )}
        >
          Sábado
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
