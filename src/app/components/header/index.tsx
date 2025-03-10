"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Header() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggle = toggleRef.current;
    const menu = menuRef.current;

    const handleClick = () => {
      if (menu) {
        menu.classList.toggle("active");
        menu.style.opacity = menu.classList.contains("active") ? "1" : "0";
      }
    };

    toggle?.addEventListener("click", handleClick);
    return () => toggle?.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="fixed w-full z-[999]">
      <nav className="bg-secondary w-full z-20 top-0 border-b border-borderBlue">
        <div className="innerWidth max-w-8xl flex items-center justify-between mx-auto p-4">
          <Link href="/" className="max-w-[132px]">
            <Image src="/assets/icons/repenseLogo.svg" alt="Logo Repense" width={222} height={50} loading="lazy"/>
          </Link>
          <div className="flex md:order-2 gap-2 xs:gap-4">
            <button className="bg-primary flex items-center gap-4 text-tertiary rounded hover:bg-opacity-85 py-1 px-4 sm:py-3 sm:px-6">
              <span className="text-xs xs:text-sm sm:text-base">Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 16 16">
                <path d="M4.667 11.334L11.334 4.667M11.334 4.667H4.667M11.334 4.667v6.667" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button ref={toggleRef} data-collapse-toggle="navbar-sticky" type="button" className="group md:hidden p-2 xs:p-3 text-tertiary rounded-lg hover:bg-softBlue">
              <span className="sr-only">Open menu</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path className="group-hover:fill-tertiary" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div ref={menuRef} id="navbar-sticky" className="w-[calc(100%-32px)] max-md:absolute max-md:top-[90px] max-md:opacity-0 md:flex md:w-auto transition-all duration-300 ease-in-out max-md:m-auto">
            <ul className="flex flex-col md:flex-row gap-8 max-md:p-4 max-md:bg-softBlue max-md:border border-borderBlue rounded-lg">
              <li>
                <Link href="/" className="block py-2 px-3 text-tertiary rounded-sm hover:text-tertiary max-md:hover:bg-borderBlue max-md:rounded">Home</Link>
              </li>
              <li>
                <Link href="/sobre" className="block py-2 px-3 text-tertiary rounded-sm hover:text-tertiary max-md:hover:bg-borderBlue max-md:rounded">Sobre</Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 px-3 text-tertiary rounded-sm hover:text-tertiary max-md:hover:bg-borderBlue max-md:rounded">Blog</Link>
              </li>
              <li>
                <Link href="/aplicativo" className="block py-2 px-3 text-tertiary rounded-sm hover:text-tertiary max-md:hover:bg-borderBlue max-md:rounded">Aplicativo</Link>
              </li>
              <li>
                <Link href="/contato" className="block py-2 px-3 text-tertiary rounded-sm hover:text-tertiary max-md:hover:bg-borderBlue max-md:rounded">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
