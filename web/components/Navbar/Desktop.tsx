import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import Logo from './Logo';

const Desktop = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: {target: any}) {
      if (
        modalRef.current &&
        !modalRef?.current?.contains(event.target) &&
        isSubMenuOpen
      ) {
        toggleSubMenu();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto flex justify-between py-4">
      {/* Logo */}
      <Logo />
      {/* Navbar */}
      <div className="flex gap-4 items-center relative">
        {[
          {label: 'Sobre o Cefa', url: '/sobre'},
          {label: 'Atividades', url: '/atividades'},
          {label: 'Palestras', url: '/palestras'},
          {label: 'Contato', url: '/contato'},
          {
            label: 'Mais',
            subItems: [
              {label: 'Horários', url: '/horarios'},
              {label: 'Biblioteca', url: '/biblioteca'},
              {label: 'Boletins CEFA', url: '/boletins'},
              {label: 'Grupo Musical', url: '/grupo-musical'},
            ],
          },
        ].map(({url, label, subItems}) => {
          if (Array.isArray(subItems)) {
            return (
              <button
                className="font-light text-xl transition flex gap-2 hover:text-primary cursor-pointer group items-center"
                onClick={toggleSubMenu}
                key={label}
              >
                <span className="group-hover:text-primary text-[20px] leading-[29px]">
                  {label}
                </span>
                <span className="group-hover:color-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down group-hover:fill-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            );
          }

          if (url) {
            return (
              <Link href={url} passHref key={url} legacyBehavior>
                <a className="hover:no-underline">
                  <span className="font-light transition hover:text-primary cursor-pointer whitespace-nowrap text-[20px] leading-[29px]">
                    {label}
                  </span>
                </a>
              </Link>
            );
          }
        })}

        <div
          className={classnames('absolute right-0 top-16 z-50', {
            hidden: !isSubMenuOpen,
            block: isSubMenuOpen,
          })}
          ref={modalRef}
        >
          <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">
            <Link href={'/horarios'} passHref legacyBehavior>
              <a className="hover:no-underline">
                <span className="font-light transition hover:text-primary cursor-pointer whitespace-nowrap text-[20px] leading-[29px]">
                  Horários
                </span>
              </a>
            </Link>
            <Link href={'/biblioteca'} passHref legacyBehavior>
              <a className="hover:no-underline">
                <span className="font-light transition hover:text-primary cursor-pointer whitespace-nowrap text-[20px] leading-[29px]">
                  Biblioteca
                </span>
              </a>
            </Link>
            <Link href={'/boletins'} passHref legacyBehavior>
              <a className="hover:no-underline">
                <span className="font-light transition hover:text-primary cursor-pointer whitespace-nowrap text-[20px] leading-[29px]">
                  Boletins CEFA
                </span>
              </a>
            </Link>
            <Link href={'/grupo-musical'} passHref legacyBehavior>
              <a className="hover:no-underline">
                <span className="font-light transition hover:text-primary cursor-pointer whitespace-nowrap text-[20px] leading-[29px]">
                  Grupo Musical
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
