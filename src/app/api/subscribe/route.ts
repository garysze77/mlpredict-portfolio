import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_FROM = process.env.EMAIL_FROM || 'MLPredict <onboarding@mlpredict.app>';
const CONTACT_TO = process.env.CONTACT_TO || 'info@mlpredict.app';
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: Request) {
  const resend = getResend();
  if (!resend) {
    return NextResponse.json(
      { error: 'Newsletter not configured (RESEND_API_KEY)' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // 1) 若有 RESEND_AUDIENCE_ID，加入 Resend Audience
    if (RESEND_AUDIENCE_ID) {
      const { error: contactError } = await resend.contacts.create({
        audienceId: RESEND_AUDIENCE_ID,
        email,
        unsubscribed: false,
      });
      if (contactError) {
        console.error('Resend contact create error:', contactError);
        // 重複 email 可能失敗，仍寄通知給管理員
      }
    }

    // 2) 通知管理員有新訂閱
    const { error: notifyError } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [CONTACT_TO],
      subject: '[MLPredict] 新訂閱：' + email,
      html: `<p>網站訂閱最新動態</p><p>電郵：${escapeHtml(email)}</p>`,
    });

    if (notifyError) {
      console.error('Resend subscribe notify error:', notifyError);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Subscribe API error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
