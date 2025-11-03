"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es el Planificador para Mascotas?",
    answer:
      "Es un archivo PDF imprimible diseñado para ayudarte a organizar y llevar registro de la información más importante de tu perro o gato: vacunas, alimentación, visitas al veterinario, medicación, paseos y momentos especiales.",
  },
  {
    question: "¿Es apto para perros y gatos?",
    answer:
      "Sí 🐶🐱 Está diseñado para cualquier mascota domesticada, sin importar raza, tamaño o edad.",
  },
  {
    question: "¿En qué formato lo recibo?",
    answer:
      "Recibirás un archivo PDF digital que puedes descargar inmediatamente después de la compra. Lo puedes imprimir las veces que quieras.",
  },
  {
    question: "¿Cómo lo imprimo?",
    answer:
      "Puedes imprimirlo en casa o en cualquier papelería. Está diseñado en tamaño carta para que sea fácil y económico de imprimir.",
  },
  {
    question: "¿Tiene costo?",
    answer:
      "Sí, el planificador tiene un valor de $12.000 COP. Es un pago único, y puedes imprimirlo cuantas veces quieras.",
  },
  {
    question: "¿Cómo lo recibo después de pagar?",
    answer:
      "Una vez realizado el pago, el archivo se envía automáticamente a tu correo electrónico 📩.",
  },
  {
    question: "¿Puedo usarlo para más de una mascota?",
    answer:
      "¡Claro! Como es imprimible, puedes hacer una copia para cada peludito que tengas 🐾",
  },
  {
    question: "¿Se puede editar digitalmente?",
    answer:
      "Sí, puedes usar aplicaciones que permiten escribir sobre archivos PDF, pero se recomienda imprimirlo para un uso más práctico y visual.",
  },
];

const PreguntasSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-3xl mx-auto p-8"
      aria-labelledby="frequently-asked-questions"
    >
      <header className="text-center mb-6">
        <h2
          id="frequently-asked-questions"
          className="text-4xl font-bold text-gray-900"
        >
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-600 mt-2 text-xl">
          Todo lo que necesitas saber antes de descargar el{" "}
          <strong>Planificador para Mascotas</strong>.
        </p>
      </header>

      <dl className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg bg-white"
          >
            <dt>
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center text-xl font-semibold bg-gray-50 hover:bg-gray-100 transition"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {faq.question}
                <span className="text-2xl font-bold text-primary">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
            </dt>
            {openIndex === index && (
              <dd
                id={`faq-${index}`}
                className="px-5 py-3 text-gray-700 bg-white text-xl"
              >
                {faq.answer}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PreguntasSection;
