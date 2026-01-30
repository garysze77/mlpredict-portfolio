import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_FROM = process.env.EMAIL_FROM || 'MLPredict <onboarding@mlpredict.app>';
const CONTACT_TO = process.env.CONTACT_TO || 'info@mlpredict.app';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: Request) {
  const resend = getResend();
  if (!resend) {
    return NextResponse.json(
      { error: 'Email service not configured (RESEND_API_KEY)' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message too short (min 10 characters)' }, { status: 400 });
    }

    const safeName = typeof name === 'string' ? name.trim().slice(0, 200) : '—';

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `[MLPredict 網站] 聯絡表單：${safeName || email}`,
      html: `
        <p><strong>來自網站聯絡表單</strong></p>
        <p><strong>姓名：</strong> ${escapeHtml(safeName || '—')}</p>
        <p><strong>電郵：</strong> ${escapeHtml(email)}</p>
        <p><strong>訊息：</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message.trim())}</pre>
      `,
    });

    if (error) {
      console.error('Resend contact error:', error);
      const message = typeof error === 'object' && error !== null && 'message' in error
        ? String((error as { message: unknown }).message)
        : 'Failed to send email';
      return NextResponse.json(
        { error: process.env.NODE_ENV === 'development' ? message : 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error('Contact API error:', e);
    const message = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json(
      { error: process.env.NODE_ENV === 'development' ? message : 'Server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
