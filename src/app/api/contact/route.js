async function sendTelegram(text) {
  console.log(text);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          text,
        }),
        signal: AbortSignal.timeout(15000),
      }
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Telegram Send Error:", err);
    return null;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, subject, message } = body;

    const text = `
Message From My Portfolio

Name: ${username}
Email: ${email}
Subject: ${subject}
Message: ${message}
`;

    const telegramResponse = await sendTelegram(text);

    console.log(telegramResponse);

    if (!telegramResponse || !telegramResponse.ok) {
      return Response.json({ success: false });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}
