
export default async function handler(req, res) {
  const { message } = req.body;
  const apiKey = "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";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Kamu adalah asisten AI cerdas milik Aden. Kamu bisa jawab semua pertanyaan secara ramah dan pintar." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Maaf, ada error dari AI.";
  res.status(200).json({ reply });
}
