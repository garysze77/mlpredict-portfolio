'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data?.error || '送出失敗，請稍後再試');
        return;
      }
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('網路錯誤，請稍後再試');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          姓名
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400"
          placeholder="選填"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          電郵 <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400"
          placeholder="you@example.com"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          訊息 <span className="text-red-500">*</span>（至少 10 字）
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={10}
          rows={4}
          className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-400"
          placeholder="請簡述查詢或合作意向..."
          disabled={status === 'loading'}
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      {status === 'success' && (
        <p className="text-sm text-green-600 dark:text-green-400" role="status">
          已送出，我們會盡快回覆。
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-primary-600 px-4 py-2.5 font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-60 dark:focus:ring-offset-slate-900"
      >
        {status === 'loading' ? '送出中…' : '送出'}
      </button>
    </form>
  );
}
