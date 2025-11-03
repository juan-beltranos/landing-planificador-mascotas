"use client";
import React, { useState } from "react";
import { preguntasPorCapitulo } from "@/data/preguntas";

const CapituloFormulario = ({ capituloId, onSubmit }) => {
  const preguntas = preguntasPorCapitulo[capituloId];
  const [respuestas, setRespuestas] = useState({});

  const handleChange = (preguntaIndex, valor) => {
    setRespuestas((prev) => ({ ...prev, [preguntaIndex]: valor }));
  };

  const handleSubmit = () => {
    onSubmit(respuestas);
  };

  return (
    <div>
      {preguntas.map((p, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{p.question}</p>
          {p.options.map((op, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`pregunta-${index}`}
                value={op}
                onChange={() => handleChange(index, op)}
              />{" "}
              {op}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-4 bg-primary px-4 py-2 text-black-dark rounded"
      >
        Generate Analysis
      </button>
    </div>
  );
};

export default CapituloFormulario;
