"use client";

import Image from "next/image";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import useContactForm from "@/hooks/useContactForm";

const ContactoSection = () => {
  const { formData, successMessage, handleChange, handleSubmit, loading } =
    useContactForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("Error: reCAPTCHA no está disponible.");
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      if (!token) {
        alert("Error validando reCAPTCHA, por favor intenta nuevamente.");
        return;
      }

      handleSubmit(e, token);
    } catch (error) {
      console.error("❌ Error obteniendo token reCAPTCHA:", error);
      alert("Error con reCAPTCHA. Intenta otra vez.");
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto bg-white rounded-lg p-8 flex flex-col md:flex-row items-center mb-5 shadow-lg"
      aria-labelledby="contact-planificador-mascotas"
    >
      {/* Información */}
      <div className="md:w-1/2 pr-6">
        <header>
          <h2
            id="contact-planificador-mascotas"
            className="text-4xl font-bold text-gray-900"
          >
            ¿Tienes dudas sobre el planificador?
          </h2>
        </header>
        <p className="text-gray-600 mt-3 text-xl">
          Si necesitas más información antes de descargar el{" "}
          <strong>Planificador para Mascotas</strong>, o tienes alguna pregunta
          sobre el proceso de compra o uso, escríbenos. 🐾💛
        </p>

        <div className="mt-6 space-y-2 text-gray-700 mb-4">
          <p>
            <a
              href="mailto:botservicesco@gmail.com"
              className="text-black-dark font-bold hover:underline"
            >
              botservicesco@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0">
        {successMessage && (
          <p
            className="text-green-600 bg-green-100 p-3 rounded-md text-center mb-4"
            role="status"
            aria-live="polite"
          >
            {successMessage}
          </p>
        )}

        <form
          className="space-y-4"
          onSubmit={handleFormSubmit}
          aria-label="Formulario de contacto"
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 bg-gray-100 border border-gray-300 outline-none focus:border-primary focus:bg-gray-200 transition p-2 rounded-md"
              aria-label="Nombre"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 bg-gray-100 border border-gray-300 outline-none focus:border-primary focus:bg-gray-200 transition p-2 rounded-md"
              aria-label="Teléfono"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 outline-none focus:border-primary focus:bg-gray-200 transition p-2 rounded-md"
            aria-label="Correo electrónico"
            required
          />

          <textarea
            name="message"
            placeholder="Cuéntanos tu duda o mensaje"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 outline-none focus:border-primary focus:bg-gray-200 transition p-2 rounded-md h-24"
            aria-label="Mensaje"
            required
          />

          <button
            disabled={loading}
            type="submit"
            className={`w-full text-xl py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary-light hover:text-black-dark transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Enviar mensaje"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactoSection;
