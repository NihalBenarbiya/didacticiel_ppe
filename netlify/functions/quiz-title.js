exports.handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;
    if (!id) return { statusCode: 400, body: JSON.stringify({ error: "Missing id" }) };

    // Fetch the LearningApps page server-side (no CORS here)
    const response = await fetch(`https://learningapps.org/watch?v=${id}`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: "LearningApps returned " + response.status }) };
    }

    const html = await response.text();

    // Extract <title>...</title>
    const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const rawTitle = match ? match[1].trim() : "";

    // LearningApps titles are often "AppName - LearningApps.org" — strip the suffix
    const title = rawTitle.replace(/\s*[-–|]\s*LearningApps\.org\s*$/i, "").trim();

    return {
      statusCode: 200,
headers: {
  "Content-Type": "application/json",
  "Cache-Control": "no-store"
},
      body: JSON.stringify({ title: title || "Quiz" }),
    };

  } catch (err) {
    console.error("Function crashed:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
  }
};