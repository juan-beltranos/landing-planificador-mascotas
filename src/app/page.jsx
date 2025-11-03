
import { Suspense } from "react";
import BannerSection from "@/components/barber/BannerSection";
import EncuentraSection from "@/components/barber/EncuentraSection";
import TusolucionSection from "@/components/barber/TusolucionSection";
import ConvierteteSection from "@/components/barber/ConvierteteSection";
import PreguntasSection from "@/components/barber/PreguntasSection";
import ContactoSection from "@/components/barber/ContactoSection";
import FloatingWhatsApp from "@/components/barber/FloatingWhatsApp";
import VideoSection from "@/components/barber/VideoSection";

export const metadata = {
  title:
    "Planificador para Mascotas | Organiza la salud y cuidados de tu perro o gato",
  description:
    "Descarga el Planificador para Mascotas: controla vacunas, visitas al veterinario, alimentación, medicación, paseos, gastos y recuerdos. PDF imprimible, ideal para perros y gatos.",
  keywords: [
    "planificador para mascotas",
    "planner mascotas",
    "organizador para perros",
    "control de vacunas perros",
    "planificador gatos",
    "cuidados mascota",
    "salud mascotas",
    "PDF imprimible mascotas",
    "planner veterinario",
    "diario de mascota",
  ],
  icons: {
    icon: "/images/portada.png",
  },
  openGraph: {
    title: "Planificador para Mascotas — PDF Imprimible",
    description:
      "Organiza la salud, cuidados y momentos especiales de tu mascota. Ideal para perros y gatos. Descarga inmediata.",
    url: "https://tu-dominio.com",
    siteName: "Planificador para Mascotas",
    images: [
      {
        url: "/images/portada.png",
        width: 1200,
        height: 630,
        alt: "Portada Planificador para Mascotas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planificador para Mascotas — Descarga Inmediata",
    description:
      "Organiza todo lo importante de tu mascota: salud, alimentación, paseos, gastos y recuerdos.",
    images: ["/images/portada.png"],
    creator: "@tumarca",
  },
  metadataBase: new URL("https://tu-dominio.com"),
};

// ✅ Actualizamos los títulos del listado de secciones
const sections = [
  { id: "banner", component: BannerSection, title: "Inicio" },
  { id: "video", component: VideoSection, title: "Vista previa" },
  {
    id: "encuentra",
    component: EncuentraSection,
    title: "Contenido del planificador",
  },
  { id: "solucion", component: TusolucionSection, title: "Beneficios" },
  {
    id: "conviertete",
    component: ConvierteteSection,
    title: "Por qué usar este planificador",
  },
  {
    id: "preguntas",
    component: PreguntasSection,
    title: "Preguntas frecuentes",
  },
  { id: "contacto", component: ContactoSection, title: "Contacto" },
];

export default function Home() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Planificador para Mascotas (PDF Imprimible)",
            image: "/images/portada.png",
            url: "/",
            description:
              "Planificador para organizar la salud y cuidados de perros y gatos.",
            offers: {
              "@type": "Offer",
              priceCurrency: "COP",
              price: "12000",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <div className="min-h-screen flex flex-col">
        {sections.map(({ id, component: Section, title }) => (
          <Suspense key={id} fallback={<div>Cargando {title}...</div>}>
            <section id={id} aria-labelledby={`${id}-heading`}>
              <Section />
            </section>
          </Suspense>
        ))}
      </div>

    </>
  );
}
