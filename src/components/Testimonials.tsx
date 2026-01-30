'use client';

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

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-slate-100 px-4 py-20 dark:bg-slate-800/40 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-mlpredict-500">
          見證
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          客戶見證
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          來自真實客戶的評價與反饋。
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
