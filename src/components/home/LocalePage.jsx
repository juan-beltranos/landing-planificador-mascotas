"use client";
import HeaderWidget from "@/components/home/HeaderWidget";
import FooterWidget from "@/components/home/FooterWidget";
import Link from "next/link";

export default function LocalePage({ children }) {

  const sections = [
    { id: "services", title: "Servicios" },
    { id: "tasker", title: "Ser Tasker" },
    { id: "phases", title: "Proceso" },
    { id: "premium", title: "Membresía Premium" },
    { id: "why-tasky", title: "¿Por qué Tasky?" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white">
        <HeaderWidget>
          <nav aria-label="Navegación principal">
            {sections.map(({ id, title }) => (
              <Link key={id} href={`#${id}`} className="mx-2">
                <span className="hover:underline">{title}</span>
              </Link>
            ))}
          </nav>
        </HeaderWidget>
      </header>
      <main className="flex-grow">{children}</main>
      <footer id="footer">
        <FooterWidget />
      </footer>
    </div>
  );
}
