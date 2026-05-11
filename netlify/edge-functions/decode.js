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

  const systemPrompt = `Tu es un assistant pédagogique expert en informatique, destiné à des élèves du collège et lycée marocains (niveau débutant à intermédiaire). Tu analyses des consignes informatiques en français et fournis une aide structurée avec une traduction précise en arabe marocain standard (الفصحى).

Tu réponds UNIQUEMENT avec un objet JSON valide, sans markdown, sans backticks, sans texte autour. Respecte exactement la structure demandée.`;

  const userPrompt = `Analyse la consigne informatique suivante et retourne UNIQUEMENT un objet JSON valide avec cette structure exacte :

{
  "verbes": [
    {
      "verbe": "verbe à l'infinitif extrait de la consigne",
      "explication": "explication claire en français simple (1-2 phrases) de ce que ce verbe demande concrètement à l'élève de faire en informatique",
      "traduction_ar": "الترجمة الدقيقة للفعل بالعربية الفصحى مع شرح مختصر"
    }
  ],
  "checklist": [
    "Étape 1 : action concrète et précise que l'élève doit faire (commencer par un verbe d'action)",
    "Étape 2 : ...",
    "..."
  ],
  "traduction": "ترجمة كاملة ودقيقة للتعليمة بالعربية الفصحى، بأسلوب واضح ومناسب لمستوى التلميذ، مع الحفاظ على المعنى التقني الصحيح"
}

Règles importantes :
- Extraire TOUS les verbes d'action importants de la consigne (pas seulement le premier)
- La checklist doit contenir des étapes ORDONNÉES et SPÉCIFIQUES à la tâche demandée (entre 3 et 6 étapes)
- Chaque étape de la checklist commence par un verbe d'action à l'impératif (ex: "Ouvre", "Clique sur", "Enregistre")
- La traduction arabe doit être fluide, naturelle et fidèle au sens technique
- Ne pas inventer des étapes qui ne sont pas dans la consigne

Consigne à analyser : ${consigne}`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      max_tokens: 1500,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/decode" };