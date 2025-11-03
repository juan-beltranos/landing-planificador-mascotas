"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const EncuentraSection = () => {
  const capitulos = [
    {
      title: "Información de tu Mascota",
      description:
        "Registra datos importantes como nombre, fecha de nacimiento, clínica veterinaria, alergias, microchip y contactos de emergencia.",
      icon: "/images/cap1.png",
    },
    {
      title: "Vacunas y Citas Veterinarias",
      description:
        "Lleva control de próximas vacunas, desparasitaciones, visitas y recomendaciones del veterinario.",
      icon: "/images/cap2.png",
    },
    {
      title: "Alimentación y Bienestar",
      description:
        "Controla el tipo de dieta, frecuencia, marcas favoritas, alimentos prohibidos y observaciones de salud.",
      icon: "/images/cap3.png",
    },
    {
      title: "Medicaciones y Tratamientos",
      description:
        "Registra dosis, horarios, duración de tratamientos y señales importantes para actuar a tiempo.",
      icon: "/images/cap4.png",
    },
    {
      title: "Paseos, Rutinas y Hábitos",
      description:
        "Haz seguimiento de ejercicio, distancias, horarios, energía y cambios en el comportamiento.",
      icon: "/images/cap5.png",
    },
    {
      title: "Recuerdos y Momentos Especiales",
      description:
        "Incluye fotos, hitos importantes, logros y momentos que nunca quieres olvidar 💛",
      icon: "/images/cap6.png",
    },
  ];

  return (
    <section className="bg-primary text-white p-10" id="capitulos">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          ¿Qué encontrarás dentro del planificador?
        </h2>
        <p className="text-xl mt-2 md:text-2xl opacity-80">
          Todo lo necesario para cuidar, organizar y acompañar a tu mascota en
          cada etapa de su vida 🐶🐱
        </p>
      </div>

      <div className="mt-8 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".custom-prev",
            prevEl: ".custom-next",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {capitulos.map((capitulo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-primary bg-opacity-85 rounded-2xl p-6 w-80 shadow-lg flex flex-col items-center h-[550px] text-black-dark">
                <img
                  src={capitulo.icon}
                  alt={capitulo.title}
                  className="w-40 h-60 rounded-md"
                />
                <h3 className="text-2xl font-semibold mt-4 text-center text-white">
                  {capitulo.title}
                </h3>
                <p className="text-center text-xl mt-2  text-white">
                  {capitulo.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4 space-x-4">
          <div className="custom-prev cursor-pointer">
            <Image
              src="/images/clients/izquierda.png"
              alt="Previous"
              width={40}
              height={40}
            />
          </div>
          <div className="custom-next cursor-pointer">
            <Image
              src="/images/clients/derecha.png"
              alt="Next"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncuentraSection;
