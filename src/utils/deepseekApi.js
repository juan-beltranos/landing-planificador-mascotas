export const obtenerResumenDesdeIA = async (capituloId, respuestas) => {

    const res = await fetch("/api/depseek", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ capituloId, respuestas }),
    });

    if (!res.ok) {
        throw new Error("Error generando el resumen con la IA");
    }

    const data = await res.json();
    return data.resumen;
};
