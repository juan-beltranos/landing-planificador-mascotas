"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import ButtonPay from "../pay/ButtonPay";
import OfertaHeader from "./OfertaHeader";

const HeaderWidget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname();
  const isTaskerPage = pathname.startsWith("/taskers");

  const headerClasses = isTaskerPage
    ? "bg-black text-black-dark"
    : "bg-black text-black-dark";

  // 👉 Navegación adaptada al Planificador para Mascotas
  const clientNavItems = [
    { title: "Inicio", href: "/" },
    { title: "Contenido del Planificador", href: "/#contenido" },
    { title: "Secciones Incluidas", href: "/#capitulos" },
    { title: "Beneficios", href: "/#beneficios" },
    { title: "Preguntas Frecuentes", href: "/#preguntas" },
    { title: "Contacto", href: "/#contacto" },
  ];

  // (Se deja intacto por si se usa en otra parte del sitio)
  const taskerNavItems = [
    { title: "Which Services Can You Offer?", href: "/taskers#servicios" },
    { title: "Premium Membership", href: "/taskers#membresia" },
    { title: "How It Works", href: "/taskers#funciona" },
    {
      title: "Why Is Tasky the Best Platform for You?",
      href: "/taskers#porque",
    },
    { title: "Verification Process", href: "/taskers#verificacion" },
    { title: "FAQ", href: "/taskers#faq" },
    { title: "I Want to Be a Client", href: "/taskers#cliente" },
    { title: "Contact Us", href: "/taskers#contacto" },
  ];

  const navItems = isTaskerPage ? taskerNavItems : clientNavItems;

  return (
    <header className={`shadow-md !z-30 md:pb-3 ${headerClasses}`}>
      <OfertaHeader />
      <div className="container mx-auto px-4 py-3 md:pt-3 md:py-0">
        {isMobile ? (
          <div className="flex justify-between items-center md:grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none md:justify-self-start"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  isTaskerPage ? "text-black-dark" : "text-primary"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ButtonPay />

            {/* <Link href="/" className="flex-shrink-0 md:justify-self-center">
              <Image
                src="/images/portada.png"
                alt="Planificador para Mascotas"
                width={1200}
                height={1200}
                className="h-16 w-auto"
                priority
              />
            </Link> */}

            <div className="hidden md:flex md:justify-self-end">
              <Link href="/#contacto">
                <button className="bg-primary px-4 py-2 rounded-full text-white transition">
                  Contacto
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center md:grid md:grid-cols-2">
            <div className="flex gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none md:justify-self-start"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isTaskerPage ? "text-black-dark" : "text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <Link href="/" className="flex-shrink-0 md:justify-self-center">
                <Image
                  src="/images/portada.png"
                  alt="Planificador para Mascotas"
                  width={1200}
                  height={1200}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex md:justify-self-end">
              <Link href="/#contacto">
                <button className="bg-primary px-4 py-2 rounded-full text-white transition">
                  Contacto
                </button>
              </Link>
            </div>
          </div>
        )}

        <nav
          className={`mt-4 ${isMenuOpen ? "block" : "hidden"} ${
            isTaskerPage ? "bg-primary" : "bg-white"
          } `}
        >
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 transition-colors duration-300 ${
                  activeLink === item.href
                    ? isTaskerPage
                      ? "text-black-dark font-bold"
                      : "text-primary font-bold"
                    : isTaskerPage
                    ? "text-black-dark hover:bg-purple-600"
                    : "text-black-dark hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveLink(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderWidget;
