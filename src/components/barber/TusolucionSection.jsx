"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const TuSolucionSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {/* Sección Principal */}
      <section
        className="py-10 md:py-0 flex flex-col md:flex-row items-center justify-center bg-black text-black-dark"
        aria-labelledby="planificador-mascotas"
        id="benefits"
      >
        {/* Texto Izquierda */}
        <article className="w-full md:w-1/2 text-center md:text-left md:p-10">
          <header>
            <h2
              id="planificador-mascotas"
              className="text-3xl md:text-5xl font-bold text-primary"
            >
              Planificador para Mascotas (PDF Imprimible)
            </h2>
          </header>
          <p className="mt-4 text-xl pb-5">
            La herramienta ideal para llevar el control de la salud, cuidados y
            rutinas de tu mascota. Organiza vacunas, alimentación, citas,
            paseos, tratamientos y momentos especiales en un solo lugar.
          </p>
        </article>

        {/* Imagen Derecha */}
        <div className="w-full md:w-1/2 h-[370px] md:h-[600px] relative mt-6 md:mt-0">
          <Image
            src="/images/image-banner.png"
            alt="Planificador para Mascotas Portada"
            layout="fill"
            objectFit="contain"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Título Sección */}
      <header>
        <h3
          className="text-center text-5xl font-bold p-5 bg-black text-black-dark"
          id="ebook-key-sections"
        >
          Más que un planner,{" "}
          <span className="text-primary">
            una forma de cuidar a quien amas 🐾
          </span>
        </h3>
      </header>

      {/* Beneficios / Pilares */}
      <section
        className={`bg-black grid p-8 ${
          isMobile ? "grid-cols-1 gap-6" : "grid-cols-3 gap-6"
        }`}
        aria-labelledby="ebook-key-sections"
      >
        {[
          {
            title: "Control de Salud",
            text: "Lleva registro de vacunas, desparasitaciones, citas y tratamientos médicos.",
            img: "/images/mentalidad.png",
            alt: "Salud Mascotas",
          },
          {
            title: "Rutinas y Bienestar",
            text: "Organiza horarios de comidas, paseos, hábitos y observaciones importantes.",
            img: "/images/dominio.png",
            alt: "Bienestar Mascotas",
          },
          {
            title: "Momentos Especiales",
            text: "Guarda recuerdos, fotos y avances para acompañar su vida con amor.",
            img: "/images/presencia.png",
            alt: "Recuerdos Mascotas",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="bg-gradient-to-t from-[#C9BEE9] to-[#D4CCEA] text-black-dark p-6 rounded-lg flex flex-col items-center text-center"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={160}
              height={160}
              className="w-auto md:w-auto rounded-md"
              priority
            />
            <h4 className="text-2xl font-semibold mt-3">{item.title}</h4>
            <p className="text-xl mt-2">{item.text}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default TuSolucionSection;
