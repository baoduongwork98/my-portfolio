const TELEGRAM_BOT_TOKEN = '7693199183:AAHZ0ZLeDfHoYR4j4EXhUf084OUosGldW7k';
const TELEGRAM_CHAT_ID = '1485487787';

export async function GET(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json({ error: 'Thiếu thông tin' }, { status: 400 });
    }

    const text = `
📩 Có người liên hệ từ website:
👤 Họ tên: ${name}
📧 Email: ${email}
📝 Tin nhắn: ${message}
    `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!telegramRes.ok) {
      return Response.json(
        { error: 'Không gửi được Telegram' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Lỗi server' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json({ error: 'Thiếu thông tin' }, { status: 400 });
    }

    const text = `
        📩 Có người liên hệ từ website:
        👤 Họ tên: ${name}
        📧 Email: ${email}
        📝 Tin nhắn: ${message}
            `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!telegramRes.ok) {
      return Response.json(
        { error: 'Không gửi được Telegram' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
