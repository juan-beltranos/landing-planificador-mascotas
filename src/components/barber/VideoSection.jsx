import Link from "next/link";
import ButtonPay from "../pay/ButtonPay";

const VideoSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 px-10 bg-black pb-8"
      aria-labelledby="video-section-title"
      id="contenido"
    >
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="w-full md:w-[300px]">
          <img src="/images/planificador-text.png" alt="planificador" />
        </div>
      </div>

      <article className="md:w-1/2 text-center md:text-left">
        <header>
          <h2
            id="video-section-title"
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          >
            ¿Qué incluye el planificador?
          </h2>
        </header>

        <p className="text-xl text-black-dark mb-6 leading-relaxed">
          Este planificador fue diseñado para ayudarte a cuidar y acompañar a tu
          mascota de forma organizada, práctica y con amor. Todo lo importante
          estará en un solo lugar, siempre a la mano.
        </p>

        <p className="text-xl text-black-dark mb-6 leading-relaxed">
          Encontrarás secciones para:
          <br />
          <strong className="text-primary">
            ✅ Vacunas y citas veterinarias
          </strong>
          <br />
          ✅ Alimentación, gustos y alergias
          <br />
          ✅ Medicación y seguimiento de síntomas
          <br />
          ✅ Paseos, rutinas y actividades
          <br />
          ✅ Gastos y suministros
          <br />✅ Fotos y recuerdos especiales 💛
        </p>

        <p className="text-xl text-black-dark mb-6 leading-relaxed">
          Y como es PDF imprimible, puedes usarlo para{" "}
          <strong>una o varias mascotas</strong>, imprimirlo cada mes o incluso
          encuadernarlo 📒🐾
        </p>

        <ButtonPay />
      </article>
    </section>
  );
};

export default VideoSection;
