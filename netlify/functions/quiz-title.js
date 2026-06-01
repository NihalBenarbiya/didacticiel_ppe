exports.handler = async function(event) {
  const appId = event.queryStringParameters.id;
  if (!appId) {
    return { statusCode: 400, body: "Missing id" };
  }

  const res = await fetch("https://learningapps.org/api/app/" + appId);
  const data = await res.json();

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(data)
  };
};