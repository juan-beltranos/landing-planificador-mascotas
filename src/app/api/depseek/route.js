import { NextResponse } from "next/server";

import { preguntasPorCapitulo } from "@/data/preguntas";
import { contenidoCapitulosEbook } from "@/data/capitulos";

export async function POST(req) {
    try {
        const { capituloId, respuestas } = await req.json();

        console.log("📥 capituloId:", capituloId);
        console.log("📥 respuestas:", respuestas);

        if (!capituloId || typeof respuestas !== "object") {
            return NextResponse.json(
                { error: "capituloId and responses are required" },
                { status: 400 }
            );
        }

        const arrayRespuestas = Object.values(respuestas);

        const contenidoCapitulo = contenidoCapitulosEbook[capituloId]?.text || "";
        const preguntas = preguntasPorCapitulo[capituloId] || [];

        const preguntasYRespuestas = preguntas
            .map((p, index) => {
                const respuesta = arrayRespuestas[index];
                return `- ${p.question}\n  User answer: ${respuesta}`;
            })
            .join("\n");
        const prompt = `
        You are a strategic mentor specializing in modern masculine development. Speak to the user as an equal — not above him, not below him.

        Your tone must be:

        - Mature and grounded
        - Intelligent and clear
        - Encouraging without clichés
        - Masculine but not aggressive
        - Motivational with direction and purpose

        Avoid:
        - Generic self-help phrases
        - Overly emotional language
        - Harsh or “alpha male” posturing
        - Empty positivity

        Here is the content of Chapter ${capituloId}:
        "${contenidoCapitulo}"

        Here are the user's self-assessment answers:
        ${preguntasYRespuestas}

        Now produce a personalized analysis that includes:

        1) **Strengths** — specify what the user is already doing well and why it matters.
        2) **Areas of improvement** — explain gaps without judgment, but with clarity.
        3) **Practical recommendations** — concrete steps the user can apply today, not vague advice.
        4) **Guiding insight** — one key mindset shift to carry forward.
        5) **A reflective, motivating closing message** — concise, meaningful, and growth-oriented.

        Format it cleanly using markdown. 
        Your goal is to help the user evolve with clarity, self-respect, and direction.
        `;

        const apiRes = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }],
            }),
        });

        if (!apiRes.ok) {
            throw new Error("Error fetching response from DeepSeek");
        }

        const data = await apiRes.json();
        const resumen = data.choices[0].message.content;

        return NextResponse.json({ resumen }, { status: 200 });

    } catch (error) {
        console.error("❌ Error generating summary:", error);
        return NextResponse.json(
            { error: "Error generating summary" },
            { status: 500 }
        );
    }
}
