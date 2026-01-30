'use client';

import { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '陳先生',
    role: '賽馬平台客戶',
    content: 'MLPredict 開發的預測系統準確率高，介面清晰易用，大大提升了我們的決策效率。',
    rating: 5,
  },
  {
    id: '2',
    name: '李小姐',
    role: '商會管理員',
    content: '商會管理系統上線後，會員報名與活動管理輕鬆很多，團隊都很滿意。',
    rating: 5,
  },
  {
    id: '3',
    name: '王先生',
    role: '投資者',
    content: '美股信號通知及時準確，Finnhub 整合做得很到位，值得推薦。',
    rating: 5,
  },
];

const INTERVAL_MS = 6000;

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-20 bg-slate-100/80 px-4 py-20 dark:bg-slate-800/40 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-600 dark:text-primary-400">
          見證
        </p>
        <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">客戶見證</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">來自真實客戶的評價與反饋。</p>

        <div className="relative mt-12 overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`transition-all duration-500 ${
                i === active
                  ? 'relative z-10 opacity-100'
                  : 'absolute inset-0 z-0 opacity-0 pointer-events-none'
              }`}
              aria-hidden={i !== active}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="見證輪播">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? 'w-8 bg-primary-600 dark:bg-primary-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label={`見證 ${i + 1}`}
              aria-selected={i === active}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
