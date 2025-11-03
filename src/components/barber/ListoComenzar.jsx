"use client";
import Image from "next/image";
import Link from "next/link";

const ListoComenzar = () => {
  return (
    <section
      className="bg-primary text-black-dark py-10 px-5 text-center"
      aria-labelledby="listo-comenzar-title"
    >
      <header>
        <h2
          id="listo-comenzar-title"
          className="text-3xl md:text-4xl font-extrabold"
        >
          ¿Listo para potenciar tu barbería con Barber Bot?
        </h2>
        <p className="text-lg mt-2">
          Descarga la app y descubre cómo automatizar la atención al cliente con
          nuestro chatbot en WhatsApp.
        </p>
      </header>

      <div
        className="mt-6 flex flex-col md:flex-row justify-center gap-4"
        role="navigation"
        aria-label="Enlaces de descarga de la app"
      >
        {/* Google Play */}
        <Link
          href="https://play.google.com/store/apps/details?id=co.com.Barber Bot.app"
          className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-primary transition"
        >
          <Image
            src="/images/clients/playstore.png"
            alt="Disponible en Google Play Store"
            width={60}
            height={60}
            priority
          />
          Descargar en Google Play
        </Link>

        {/* App Store */}
        <Link
          href="https://apps.apple.com/co/app/Barber Bot/id123456789"
          className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark hover:text-black-dark transition"
        >
          <Image
            src="/images/clients/appstore.png"
            alt="Disponible en App Store de Apple"
            width={60}
            height={60}
            priority
          />
          Descargar en App Store
        </Link>
      </div>
    </section>
  );
};

export default ListoComenzar;
