"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonPay from "../pay/ButtonPay";

const ConvierteteSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row h-auto md:h-[600px] xl:h-[650px] text-black-dark"
      aria-labelledby="become-title"
    >
      {/* Imagen Lateral */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-full">
        <Image
          src="/images/conclusion.png"
          alt="Persona utilizando el planificador para mascotas"
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>

      {/* Contenido Informativo */}
      <article className="md:w-1/2 bg-black text-black-dark p-6 flex flex-col justify-center overflow-hidden">
        <header>
          <h2 id="become-title" className="text-2xl md:text-4xl font-bold">
            Cuida a tu mascota con organización y amor 🐾
          </h2>
        </header>

        <p className="mt-3 text-xl">
          Tu mascota depende de ti para llevar una vida plena, sana y feliz.
          Este planificador te ayuda a recordar lo importante y **hacer más
          fáciles los cuidados diarios**.
        </p>

        {/* Puntos Clave */}
        <div className="mt-6 space-y-4 mb-5" role="list">
          <div
            className="text-black-dark py-3 px-4 rounded-lg flex items-center border border-white"
            role="listitem"
          >
            <span className="text-xl font-semibold ml-4">
              Lleva control claro de vacunas, citas y tratamientos.
            </span>
          </div>

          <div
            className="text-black-dark py-3 px-4 rounded-lg flex items-center border border-white"
            role="listitem"
          >
            <span className="text-xl font-semibold ml-4">
              Organiza alimentación, bienestar y cambios importantes.
            </span>
          </div>

          <div
            className="text-black-dark py-3 px-4 rounded-xl flex items-center border border-white"
            role="listitem"
          >
            <span className="text-xl font-semibold ml-4">
              Guarda recuerdos, fotos y momentos especiales 💛
            </span>
          </div>
        </div>

        {/* Texto Persuasivo */}
        <p className="text-xl text-black-dark mb-6 leading-relaxed">
          Tener todo en un solo lugar te permite **prevenir problemas**, actuar
          rápido en emergencias y darle a tu mascota la vida que merece.
        </p>

        {/* CTA */}
        <ButtonPay />
      </article>
    </section>
  );
};

export default ConvierteteSection;
