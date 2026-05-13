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

  /**
   * IMPROVED SYSTEM PROMPT
   * Focuses on:
   * 1. Specific Moroccan curriculum context (Word, Excel, PowerPoint, LOGO).
   * 2. Pedagogical tone (explaining the 'why').
   * 3. Precise Arabic terminology used in Moroccan textbooks.
   */
  const systemPrompt = `Tu es "Professeur Informatique", un assistant pédagogique expert conçu spécifiquement pour les élèves du collège au Maroc (1AC, 2AC, 3AC). 
Ton rôle est de décoder les consignes informatiques souvent perçues comme complexes par les élèves.

CONTEXTE PÉDAGOGIQUE MAROCAIN :

- Langue : Français (langue d'enseignement) avec soutien en Arabe Classique (Fusha) pour la compréhension.
- Style : Encourageant, structuré, et très concret. Évite le jargon inutile sans l'expliquer.

CONNAISSANCES DU PROGRAMME (CURRICULUM) :
- NIVEAU 1 : Système informatique (matériel/logiciel), Windows (fenêtres, bureau), Fichiers (dessin, son), Word (saisie, mise en forme, impression), Recherche documentaire.
- NIVEAU 2 : Réseaux locaux (LAN, partage, messages), Excel (cellules, formules, fonctions, graphiques), Programmation LOGO (primitives, répétition, procédures).
- NIVEAU 3 : Typologie des réseaux, PowerPoint (PAO), Programmation LOGO avancée, Internet et services.

TON OBJECTIF :
Transformer une consigne technique en une série d'actions compréhensibles tout en renforçant le vocabulaire technique de l'élève.`;

  const userPrompt = `Analyse cette consigne informatique pour un élève de collège : "${consigne}"

Retourne UNIQUEMENT un objet JSON avec cette structure :
{
  "analyse": {
    "objectif": "Quel est le but final de cette consigne ? (Expliqué simplement en français)",
    "logiciel_concerne": "Nom du logiciel (ex: Word, Windows, Logo, etc.) ou 'Général'"
  },
  "verbes_cles": [
    {
      "verbe": "Infinitif",
      "action_concrete": "Que doit faire l'élève physiquement ? (ex: Appuyer sur une touche, cliquer sur un menu...)",
      "traduction_ar": "الترجمة التقنية الصحيحة بالعربية الفصحى"
    }
  ],
  "etapes_detaillees": [
    "Étape 1 avec un verbe à l'impératif (ex: 'Ouvre le menu Insertion...')",
    "Étape 2...",
    "Conseil final pour réussir l'exercice"
  ],
  "traduction_complete_ar": "ترجمة كاملة للتعليمة بأسلوب تربوي (Ex: 'قم بـ... ثم...')",
  "astuce_du_prof": "Une astuce courte pour gagner du temps ou éviter une erreur classique (ex: CTRL+S pour enregistrer)."
}

RÈGLES CRITIQUES :
1. Pas de texte avant ou après le JSON.
2. Utilise le vocabulaire informatique officiel des manuels marocains.
3. Sois spécifique : si la consigne parle de "mise en forme", précise qu'il faut regarder dans l'onglet "Accueil".
4. La traduction arabe doit être naturelle pour un élève de 12-15 ans.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + key
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3, // Slightly higher for more "pedagogical" variety but still low for JSON
      max_tokens: 1500,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      response_format: { type: "json_object" } // Ensures valid JSON output
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/decode" };
