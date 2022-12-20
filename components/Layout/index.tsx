import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | undefined>();

  const activateSubMenu = (subMenu: string | undefined) =>
    setActiveSubMenu(subMenu);

  return (
    <>
      <Head>
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          type="image/png"
          rel="icon"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          type="image/png"
          rel="icon"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          type="image/png"
          rel="icon"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          type="image/png"
          rel="icon"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div>
        {/* Navbar */}
        <div className="container mx-auto flex justify-between py-8">
          {/* Logo */}
          <div>
            <Link href="/" passHref>
              <Image
                src="/logocefa2.png"
                alt="CEFA Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
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
        {children}
        {/* Footer */}
        {/* footer */}
        <div className="bg-[#eee] w-full py-24 flex flex-col gap-4 justify-center items-center">
          <span className="text-xs text-[#333]">
            Siga-nos nas redes sociais
          </span>
          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cefafortaleza"
              rel="noreferrer"
              target="_blank"
              className="w-12 h-12 flex justify-center items-center"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="44" height="44" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0" transform="scale(0.00195312)" />
                  </pattern>
                  <image
                    id="image0"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/CefaFortaleza"
              rel="noreferrer"
              target="_blank"
              className="w-12 h-12 flex justify-center items-center"
            >
              <svg
                width="41"
                height="44"
                viewBox="0 0 41 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6071 0.125H4.39286C3.2278 0.125 2.11046 0.61886 1.28664 1.49794C0.462818 2.37701 0 3.5693 0 4.8125L0 39.1875C0 40.4307 0.462818 41.623 1.28664 42.5021C2.11046 43.3811 3.2278 43.875 4.39286 43.875H16.9537V29.001H11.1881V22H16.9537V16.6641C16.9537 10.5947 20.3398 7.24219 25.5262 7.24219C28.01 7.24219 30.6072 7.71484 30.6072 7.71484V13.6719H27.7455C24.9258 13.6719 24.0463 15.5391 24.0463 17.4541V22H30.3409L29.3342 29.001H24.0463V43.875H36.6071C37.7722 43.875 38.8895 43.3811 39.7134 42.5021C40.5372 41.623 41 40.4307 41 39.1875V4.8125C41 3.5693 40.5372 2.37701 39.7134 1.49794C38.8895 0.61886 37.7722 0.125 36.6071 0.125Z"
                  fill="#4C5D9B"
                />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href="https://www.youtube.com/user/CEFA1941"
              rel="noreferrer"
              target="_blank"
              className="w-12 h-12 flex justify-center items-center"
            >
              <svg
                width="49"
                height="53"
                viewBox="0 0 49 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.7588 12.8445C46.2245 10.3964 44.6502 8.4683 42.6513 7.81398C39.0282 6.625 24.4999 6.625 24.4999 6.625C24.4999 6.625 9.97177 6.625 6.34857 7.81398C4.3497 8.46841 2.7754 10.3964 2.24108 12.8445C1.27026 17.2819 1.27026 26.5402 1.27026 26.5402C1.27026 26.5402 1.27026 35.7984 2.24108 40.2358C2.7754 42.6839 4.3497 44.5317 6.34857 45.186C9.97177 46.375 24.4999 46.375 24.4999 46.375C24.4999 46.375 39.0281 46.375 42.6513 45.186C44.6502 44.5317 46.2245 42.6839 46.7588 40.2358C47.7296 35.7984 47.7296 26.5402 47.7296 26.5402C47.7296 26.5402 47.7296 17.2819 46.7588 12.8445ZM19.7484 34.9459V18.1344L31.8911 26.5404L19.7484 34.9459Z"
                  fill="#FF0000"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-[#333] text-xl font-light">
              Centro Espírita Francisco de Assis © Todos os direitos reservados
            </p>
            <p className="text-[#333] text-xl font-light">
              Rua Senador Catunda, 117 - Benfica - Fortaleza, CE 60015-320
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
