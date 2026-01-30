'use client';

import Link from 'next/link';
import { useState } from 'react';

const CONTACT_EMAIL = 'info@mlpredict.app';
const CONTACT_WHATSAPP = '85291574876';
const ADDRESS_LINE = '總部：香港';

export function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const email = subscribeEmail.trim();
    if (!email) return;
    setSubscribeStatus('loading');
    setSubscribeMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSubscribeStatus('success');
        setSubscribeEmail('');
        setSubscribeMessage('已加入訂閱，多謝！');
      } else {
        setSubscribeStatus('error');
        setSubscribeMessage(data?.error || '訂閱失敗，請稍後再試');
      }
    } catch {
      setSubscribeStatus('error');
      setSubscribeMessage('網路錯誤，請稍後再試');
    }
  }

  return (
    <footer className="scroll-mt-20 border-t border-slate-200 bg-slate-50 px-4 py-20 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">聯絡我們</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              查詢、報價或合作，歡迎以下列方式聯絡。
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-primary-600 hover:underline dark:text-primary-400"
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  電郵：{CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:underline dark:text-primary-400"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="text-slate-700 dark:text-slate-400">{ADDRESS_LINE}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">訂閱最新動態</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              輸入電郵，接收項目更新與產品資訊。
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={subscribeStatus === 'loading'}
                className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="shrink-0 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 disabled:opacity-60"
              >
                {subscribeStatus === 'loading' ? '提交中…' : '訂閱'}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">{subscribeMessage}</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{subscribeMessage}</p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:gap-6">
          <span>© {new Date().getFullYear()} MLPredict. All rights reserved.</span>
          <span className="hidden sm:inline">·</span>
          <Link href="/privacy" className="hover:text-primary-600 hover:underline dark:hover:text-primary-400">
            私隱條例
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link href="/disclaimer" className="hover:text-primary-600 hover:underline dark:hover:text-primary-400">
            免責聲明
          </Link>
        </div>
      </div>
    </footer>
  );
}
