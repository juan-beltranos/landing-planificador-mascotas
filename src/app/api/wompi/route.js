import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "Falta el ID de la transacción" }, { status: 400 });
        }

        const response = await fetch(`${process.env.BASE_URL_WOMPI}/v1/transactions/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.PUBLIC_KEY_WOMPI}`,
            },
        });

        if (!response.ok) {
            throw new Error("Error al consultar la transacción en Wompi");
        }

        const data = await response.json();
        const transaction = data?.data;

        const isApproved = transaction?.status === "APPROVED";

        return NextResponse.json(
            {
                approved: isApproved,
                reference: transaction?.reference,
                amount_in_cents: transaction?.amount_in_cents,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("❌ Error en check-transaction:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
