import { useState } from "react";
import classnames from "classnames";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("dom");

  const changeTab = (newTab: string) => setActiveTab(newTab);

  return (
    <div className="flex flex-col gap-8">
      {/* Tabs */}
      <div className="flex">
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

      {/* Atividades */}
      
    </div>
  );
}
