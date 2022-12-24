import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import classnames from "classnames";

import Logo from "./Logo";

const Desktop = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      if (modalRef.current && !modalRef?.current?.contains(event.target) && isSubMenuOpen) {
        toggleSubMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto flex justify-between py-8">
      {/* Logo */}
      <Logo />
      {/* Navbar */}
      <div className="flex gap-4 items-center relative">
        {[
          { label: "Sobre o Cefa", url: "/sobre" },
          { label: "Atividades", url: "/sobre" },
          { label: "Palestras", url: "/sobre" },
          { label: "Contato", url: "/contato" },
          {
            label: "Mais",
            subItems: [
              { label: "Horários", url: "/horarios" },
              { label: "Biblioteca", url: "/biblioteca" },
            ],
          },
        ].map(({ url, label, subItems }) => {
          if (Array.isArray(subItems)) {
            return (
              <button
                className="font-light text-xl transition flex gap-2 hover:text-primary cursor-pointer group"
                onClick={toggleSubMenu}
                key={label}
              >
                {label}
                <span className="pt-2 group-hover:color-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down group-hover:fill-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            );
          }

          if (url) {
            return (
              <Link href={url} passHref key={url}>
                <span className="font-light text-xl transition hover:text-primary cursor-pointer whitespace-nowrap">
                  {label}
                </span>
              </Link>
            );
          }
        })}

        <div
          className={classnames("absolute right-0 top-16", {
            hidden: !isSubMenuOpen,
            block: isSubMenuOpen,
          })}
          ref={modalRef}
        >
          <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">
            <Link href={"/horarios"} passHref>
              <span className="font-light text-xl transition hover:text-primary cursor-pointer whitespace-nowrap">
                Horários
              </span>
            </Link>
            <Link href={"/biblioteca"} passHref>
              <span className="font-light text-xl transition hover:text-primary cursor-pointer whitespace-nowrap">
                Biblioteca
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
