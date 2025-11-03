import React from "react";

const OfertaHeader = () => {
  return (
    <div className="relative overflow-hidden bg-primary text-white py-2">
      <div className="animate-scroll whitespace-nowrap text-center font-semibold">
        🐾 Oferta por tiempo limitado: Planificador para Mascotas — SOLO $12.000
        COP — Descarga inmediata 📩
      </div>

      <style jsx>{`
        .animate-scroll {
          display: inline-block;
          padding-left: 100%;
          animation: scroll 12s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default OfertaHeader;
