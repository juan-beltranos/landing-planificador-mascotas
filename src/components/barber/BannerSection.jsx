import Image from "next/image";
import Link from "next/link";
import ButtonPay from "../pay/ButtonPay";

const BannerSection = () => {
  return (
    <>
      <section
        className="bg-black py-12 px-6 md:px-12 gap-8 flex flex-col md:flex-row items-center justify-between"
        aria-labelledby="banner-title"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <header>
            <h1
              id="banner-title"
              className="text-5xl md:text-6xl font-extrabold text-primary md:leading-tight"
            >
              Organiza la vida de tu mascota con amor 🐾
            </h1>
            <h2 className="text-xl md:text-3xl mt-4 text-black-dark font-light">
              El planificador imprimible para registrar vacunas, citas,
              alimentación, paseos, cuidados y momentos inolvidables de tu perro
              o gato.
            </h2>
          </header>

          <div className="mt-8 flex flex-col w-full gap-4" role="navigation">
            <ButtonPay />

            <div className="flex flex-col items-center justify-center">
              <small className="text-black-dark">
                📩 Recíbelo automáticamente en tu correo al completar la compra.
              </small>
              <p className="text-black-dark">🔒 Pagos 100% seguros con Wompi</p>
              <Image
                src="/images/metodo-wompi.jpg"
                alt="Método de pago Wompi seguro"
                priority
                width={250}
                height={250}
                className="bg-white rounded-md mt-4"
              />
            </div>

            <p className="text-center">
              ¿No puedes pagar con Wompi? Escríbenos al WhatsApp para pagar por
              Nequi, Bancolombia o cualquier medio de pago. 💬
            </p>
            <Link
              href="#capitulos"
              className="w-full border border-pribg-primary text-pribg-primary px-6 py-3 text-black-dark rounded-xl text-xl font-medium flex justify-center items-center text-center hover:bg-primary-dark hover:text-black-dark transition"
            >
              Ver contenido del planificador
            </Link>
          </div>
        </div>

        <aside className="md:w-1/2 flex flex-col items-center text-black-dark">
          <div className="relative overflow-hidden shadow-lg">
            <Image
              src="/images/portada.png"
              alt="Portada Planificador para Mascotas PDF"
              priority
              width={250}
              height={200}
            />
          </div>

          <div className="bg-orange p-1 shadow-lg text-center w-full max-w-sm">
            <h3 className="text-4xl font-bold">+120 familias</h3>
            <p className="text-xl mt-2">
              Ya están organizando mejor la salud y cuidados de sus peluditos
              🐶🐱
            </p>
          </div>
        </aside>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center bg-black pb-20 w-full ">
        {[
          {
            icon: "/images/icon-vacunas.webp",
            title: "Control de Vacunas",
            text: "No vuelvas a olvidar fechas importantes.",
          },
          {
            icon: "/images/icon-alimentacion.png",
            title: "Alimentación y Bienestar",
            text: "Lleva registro de dietas, marcas y preferencias.",
          },
          {
            icon: "/images/icon-amor.jpg",
            title: "Momentos Especiales",
            text: "Guarda recuerdos, fotos y hitos importantes 💛",
          },
        ].map(({ icon, title, text }, index) => (
          <article key={index} className="p-4">
            <span className="flex justify-center mb-2">
              <Image
                src={icon}
                alt={`Icon ${title}`}
                width={100}
                height={100}
              />
            </span>
            <h3 className="text-4xl font-semibold text-primary">{title}</h3>
            <p className="text-xl text-black-dark">{text}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default BannerSection;
