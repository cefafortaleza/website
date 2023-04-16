import { useState } from "react";
import Link from "next/link";

import classnames from "classnames";

import Logo from "./Logo";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-full ">
      {/* Logo / Burger Menu */}
      <div className="flex justify-between w-full h-full items-center z-40 p-4">
        <Logo />
        <button
          className="flex flex-col gap-[4px] w-6 h-6 z-50 group"
          onClick={handleMenu}
        >
          <span
            className={classnames(
              "h-[2px] w-full block bg-black group-hover:bg-primary transition",
              {
                "opacity-0": isOpen,
                "opacity-100": !isOpen,
              }
            )}
          />
          <span
            className={classnames(
              "h-[2px] w-full block bg-black transition-transform group-hover:bg-primary",
              {
                "rotate-[135deg] -translate-y-[-3px] bg-black group-hover:bg-primary":
                  isOpen,
              }
            )}
          />
          <span
            className={classnames(
              "h-[2px] w-full block bg-black transition-transform group-hover:bg-primary",
              {
                "rotate-45 -translate-y-[2px] bg-black group-hover:bg-primary":
                  isOpen,
              }
            )}
          />
        </button>
      </div>
      {/* Hidden Menu */}
      <div
        className={classnames(
          "absolute top-0 -left-4 w-[60%] transition z-20",
          {
            "-translate-x-[100vw]": !isOpen,
            "translate-x-[0]": isOpen,
          }
        )}
      >
        <div className="bg-white min-h-screen p-8 flex flex-col gap-4">
          <Link href="/sobre">
            <span className="text-lg font-[200] hover:text-primary">
              Sobre o CEFA
            </span>
          </Link>
          <Link href="/atividades">
            <span className="text-lg font-[200] hover:text-primary">
              Atividades
            </span>
          </Link>
          <Link href="/palestras">
            <span className="text-lg font-[200] hover:text-primary">
              Palestras
            </span>
          </Link>
          <Link href="/contato">
            <span className="text-lg font-[200] hover:text-primary">
              Contato
            </span>
          </Link>
          <div className="flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="text-lg font-[200] ">Mais</span>
              <span className="text-lg font-[200] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full pl-4 flex flex-col gap-4">
              <Link href="/horarios">
                <span className="text-lg font-[200] hover:text-primary">
                  Horários
                </span>
              </Link>
              <Link href="/biblioteca">
                <span className="text-lg font-[200] hover:text-primary">
                  Biblioteca
                </span>
              </Link>
              <Link href="/grupo-musical">
                <span className="text-lg font-[200] hover:text-primary">
                  Grupo Musical
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "absolute top-0 bottom-0 right-0 -left-4 h-screen w-screen transition bg-black z-10",
          {
            "-translate-x-[100vw] opacity-0": !isOpen,
            "translate-x-[0] opacity-20": isOpen,
          }
        )}
      />
    </div>
  );
};

export default Mobile;
