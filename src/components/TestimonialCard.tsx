import type { Testimonial } from '@/types';

type TestimonialCardProps = { testimonial: Testimonial };

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} 星`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-md backdrop-blur-sm dark:border-slate-600/30 dark:bg-slate-800/50">
      <Stars count={testimonial.rating} />
      <p className="mt-4 flex-1 text-xl italic leading-relaxed text-slate-700 dark:text-slate-300">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-mlpredict-100 flex items-center justify-center text-mlpredict-600 font-bold dark:bg-mlpredict-900/50 dark:text-mlpredict-400">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-semibold text-slate-900 dark:text-white">
            {testimonial.name}
          </cite>
          <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
