export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const key = process.env.GROQ_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: { message: "GROQ_API_KEY non définie dans les variables Netlify" } }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }

  const { consigne } = await req.json();
  if (!consigne) return new Response("Missing consigne", { status: 400 });

  const prompt = `Tu es un assistant pédagogique. Analyse la consigne informatique suivante et retourne UNIQUEMENT un objet JSON valide (sans markdown, sans backticks, sans texte autour) avec cette structure exacte:
{
  "verbes": [
    { "verbe": "string", "explication": "string en français simple", "traduction_ar": "string en arabe" }
  ],
  "checklist": ["étape 1", "étape 2", "..."],
  "traduction": "traduction complète de la consigne en arabe"
}

Consigne: ${consigne}`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/decode" };