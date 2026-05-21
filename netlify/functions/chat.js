export default async (req) => {
  const body = await req.json();
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "sk-ant-api03-klj-ea8D5s1c7IBruy42Cz1Y1IpUD065rxnUWar-u4Xf5g5kmXJmNyunTlGEqAz6nUATrfLlZMorrnDdnrib6g-utEC6gAA",
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return Response.json(data);
};

export const config = { path: "/api/chat" };