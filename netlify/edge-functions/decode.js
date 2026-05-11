export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const key = process.env.GROQ_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: { message: "GROQ_API_KEY non définie" } }), {
      status: 500, headers: { "Content-Type": "application/json" }
    });
  }

  const { consigne } = await req.json();
  if (!consigne) return new Response("Missing consigne", { status: 400 });

  // ═══ IMPROVED PROMPT ════════════════════════════════
  // We split into System (Persona) and User (Task) for better adherence
  const systemPrompt = `
    Tu es un assistant pédagogique expert pour des élèves arabophones apprenant l'informatique.
    Tu DOIS retourner UNIQUEMENT un objet JSON valide (sans markdown, sans texte autour).

    RÈGLES STRICTES À SUIVRE :
    1. **Checklist (Étapes)** :
       - Décompose la consigne en actions TRÈS SIMPLES.
       - Chaque étape DOIT commencer par un verbe à l'infinitif (Ex: "Ouvrir le dossier", "Sélectionner le texte").
       - Le style doit être pédagogique et facile à lire.

    2. **Traduction Arabe** :
       - Utilise IMPÉRATIVEMENT l'arabe littéraire (Fusha).
       - Utilise le VOCABULAIRE INFORMATIQUE EXACT (ex: "Fichier" -> "ملف", "Dossier" -> "مجلد", "Clique" -> "انقر", "Enregistrer" -> "حفظ").
       - Ne traduis pas mot à mot si le sens technique est différent.

    3. **Verbes** :
       - Identifie les verbes d'action principaux.
       - Donne une explication simple en français.
  `;

  const userPrompt = `
    Analyse la consigne suivante et retourne le JSON :
    "${consigne}"
  `;
  // ════════════════════════════════════════════════════

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2, // Lower temperature for more deterministic/factual results
      max_tokens: 1000,
      // Using the messages array properly
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    })
  });

  const data = await res.json();
  
  // Error handling if API fails
  if (!res.ok) {
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/decode" };