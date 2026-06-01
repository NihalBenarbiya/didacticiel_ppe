exports.handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;

    const response = await fetch(`https://your-api.com/quiz/${id}`);

    // Check if the request actually succeeded
    if (!response.ok) {
      const text = await response.text(); // read as text, not JSON
      console.error(`API error ${response.status}:`, text);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Upstream API returned ${response.status}` }),
      };
    }

    const data = await response.json(); // safe to parse now

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: data.title }),
    };

  } catch (err) {
    console.error("Function crashed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};