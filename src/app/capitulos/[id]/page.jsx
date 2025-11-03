"use client";

import { useState } from "react";
import { obtenerResumenDesdeIA } from "@/utils/deepseekApi";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import CapituloFormulario from "@/components/activities/CapituloFormulario";

export default function CapituloPage({ params }) {
  const { id } = params;
  const [resumen, setResumen] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormularioSubmit = async (respuestas) => {
    setLoading(true);
    const resultado = await obtenerResumenDesdeIA(id, respuestas);
    setResumen(resultado);
    setLoading(false);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chapter {id}: Activity</h1>

      {loading && (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-4 animate-pulse">
          Generating your personalized analysis… please wait.
        </div>
      )}

      {!resumen && !loading && (
        <CapituloFormulario capituloId={id} onSubmit={handleFormularioSubmit} />
      )}

      {resumen && (
        <div className="mt-6 bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            Your Personalized Analysis
          </h2>
          <pre className="whitespace-pre-wrap text-gray-800">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => (
                  <p className="mb-4 text-gray-800">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="text-black-dark font-semibold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-gray-700 italic">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside pl-4 mb-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li className="mb-1">{children}</li>,
              }}
            >
              {resumen}
            </ReactMarkdown>
          </pre>
        </div>
      )}
    </div>
  );
}
