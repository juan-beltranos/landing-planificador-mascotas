"use client";

import { useEffect, useState } from "react";

const GraciasPage = () => {
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    if (!id) {
      window.location.href = "/";
      return;
    }

    const checkTransactionStatus = async () => {
      try {
        const response = await fetch("/api/wompi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error("Error verifying transaction.");
        }

        const result = await response.json();

        if (result.approved) {
          setApproved(true);
          fbq(
            "track",
            "Purchase",
            {
              value: result.amount_in_cents / 100,
              currency: "COP",
            },
            {
              eventID: result.reference,
            }
          );
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error verifying transaction:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    checkTransactionStatus();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Verificando tu compra...</p>
      </div>
    );
  }

  if (error || !approved) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <p className="text-red-500 font-medium text-lg text-center">
          La transacción no fue aprobada. Si crees que esto es un error, por
          favor contáctanos.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        ¡Gracias por tu compra! 🐾
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Tu archivo <strong>"Planificador para Mascotas"</strong> está listo para
        descargar.
        <br />✨ Recuerda: es imprimible y puedes usarlo para una o varias
        mascotas.
      </p>

      <a
        href="/ebook-pdf/planificador-mascotas.pdf"
        download
        className="bg-primary hover:bg-primary-light text-black-dark font-semibold py-2 px-6 rounded shadow transition duration-300"
      >
        Descargar Planificador
      </a>

      <p className="mt-6 text-gray-600 text-sm text-center">
        Si no ves el archivo, revisa tu carpeta de descargas
        <br />o escríbenos para ayudarte 💛
      </p>
    </div>
  );
};

export default GraciasPage;
