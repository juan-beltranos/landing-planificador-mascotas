"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const TuViaje = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="text-center py-20 px-5 bg-primary"
      aria-labelledby="tu-viaje-barberbot"
    >
      <header>
        <h2
          id="tu-viaje-barberbot"
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          ¡Optimiza tu barbería con Barber Bot en solo 4 pasos!
        </h2>
      </header>

      <ol className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 list-decimal list-inside">
        {/* Paso 1 */}
        <li
          className={`flex flex-col items-center transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 1
              ? "opacity-100 scale-105 animate-fade-in"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Image
            src="/images/clients/logo.png"
            alt="Paso 1: Registro en Barber Bot"
            width={60}
            height={60}
            priority
          />
          <p className="mt-3 text-gray-700">Regístrate en Barber Bot.</p>
        </li>

        {/* Flecha 1 */}
        <span
          className={`hidden md:block transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 2
              ? "opacity-100 scale-105 animate-bounce"
              : "opacity-0 translate-y-4"
          }`}
          aria-hidden="true"
        >
          <Image
            src="/images/clients/flechaDer.png"
            alt=""
            width={65}
            height={65}
            priority
          />
        </span>

        {/* Paso 2 */}
        <li
          className={`flex flex-col items-center transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 2
              ? "opacity-100 scale-105 animate-fade-in"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Image
            src="/images/clients/logo.png"
            alt="Paso 2: Configuración del asistente"
            width={60}
            height={60}
            priority
          />
          <p className="mt-3 text-gray-700">Configura tu asistente virtual.</p>
        </li>

        {/* Flecha 2 */}
        <span
          className={`hidden md:block transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 3
              ? "opacity-100 scale-105 animate-bounce"
              : "opacity-0 translate-y-4"
          }`}
          aria-hidden="true"
        >
          <Image
            src="/images/clients/flechaDer.png"
            alt=""
            width={65}
            height={65}
            priority
          />
        </span>

        {/* Paso 3 */}
        <li
          className={`flex flex-col items-center transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 3
              ? "opacity-100 scale-105 animate-fade-in"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Image
            src="/images/clients/logo.png"
            alt="Paso 3: Automatización"
            width={60}
            height={60}
            priority
          />
          <p className="mt-3 text-gray-700">
            Activa respuestas automáticas y procesos de atención.
          </p>
        </li>

        {/* Flecha 3 */}
        <span
          className={`hidden md:block transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 4
              ? "opacity-100 scale-105 animate-bounce"
              : "opacity-0 translate-y-4"
          }`}
          aria-hidden="true"
        >
          <Image
            src="/images/clients/flechaDer.png"
            alt=""
            width={65}
            height={65}
            priority
          />
        </span>

        {/* Paso 4 */}
        <li
          className={`flex flex-col items-center transition-opacity duration-500 ease-in-out transform ${
            visibleSteps >= 4
              ? "opacity-100 scale-105 animate-fade-in"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Image
            src="/images/clients/logo.png"
            alt="Paso 4: Atención optimizada con Barber Bot"
            width={60}
            height={60}
            priority
          />
          <p className="mt-3 text-gray-700">
            Mejora la experiencia de tus clientes desde el primer contacto.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default TuViaje;
