import Link from "next/link";
import Image from "next/image";

import Logo from './Logo'

const Desktop = () => {
  return (
    <div className="container mx-auto flex justify-between py-8">
      {/* Logo */}
      <Logo />
      {/* Navbar */}
      <div className="flex gap-4 items-center">
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
              <p
                className="font-light text-xl transition flex gap-2 hover:text-primary cursor-pointer"
                key={label}
              >
                {label}
                <span className="pt-2">
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
              </p>
            );
          }

          if (url) {
            return (
              <Link href={url} passHref key={url}>
                <span className="font-light text-xl transition hover:text-primary cursor-pointer">
                  {label}
                </span>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Desktop;
