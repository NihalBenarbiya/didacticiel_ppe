function buildPrompt(consigne) {
  return `Tu es un assistant pédagogique pour élèves de collège au Maroc.
Analyse cette consigne d'informatique en français 
et réponds EXACTEMENT dans ce format JSON (sans texte avant ou après) :
{
  "verbes": [
    {
      "verbe": "...",
      "explication": "...",
      "traduction_ar": "..."
    }
  ],
  "checklist": ["...", "..."],
  "traduction": "..."
}

Règles :
- "verbes" : liste TOUS les verbes d'action présents dans la consigne (autant qu'il y en a, ni plus ni moins).
- "explication" : courte définition en français simple pour un élève de 12 ans.
- "traduction_ar" : traduction du verbe ET de son explication en arabe standard (الفصحى).
- "checklist" : décompose la consigne en étapes concrètes à réaliser (autant d'étapes que nécessaire).
- "traduction" : traduction complète de la consigne en arabe standard.

Consigne à analyser : "${consigne}"`;
}

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const { consigne } = await req.json();

  if (!consigne || typeof consigne !== "string" || consigne.trim() === "") {
    return new Response(JSON.stringify({ error: "Consigne manquante ou invalide." }), { status: 400 });
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1024,
        messages: [{ role: "user", content: buildPrompt(consigne.trim()) }]
      })
    });

    const data = await groqRes.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Erreur interne du serveur." }), { status: 500 });
  }
};

export const config = { path: "/api/decode" };