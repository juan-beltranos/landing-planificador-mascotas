import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req) {

    try {
        const body = await req.json();
        console.log("📩 Datos recibidos:", body);

        const { name, phone, email, message, userType, country, captchaToken } = body;

        if (!name || !phone || !email || !message || !userType || !country || !captchaToken) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }

        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;

        const response = await fetch(verifyUrl, { method: "POST" });
        const captchaValidation = await response.json();

        if (!captchaValidation.success) {
            return NextResponse.json(
                { error: "reCAPTCHA inválido. Intenta de nuevo." },
                { status: 400 }
            );
        }

        const collectionRef = adminDb.collection("landing_contact_info");
        await collectionRef.add({
            name,
            phone,
            email,
            message,
            userType,
            country,
            createdAt: new Date(),
        });

        console.log("✅ Datos guardados en Firestore");
        return NextResponse.json(
            { success: "Formulario enviado con éxito" },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Error en el servidor:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
