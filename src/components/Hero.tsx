import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          MLPredict
        </h1>
        <p className="mt-4 text-xl text-slate-300 sm:text-2xl lg:text-[1.5rem]">
          Machine Learning Systems Development
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
          生產級 ML 預測平台 · 數據驅動決策 · 訂造機器學習解決方案
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-mlpredict-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-mlpredict-600 focus:outline-none focus:ring-2 focus:ring-mlpredict-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            查看 Demo
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            聯絡我們
          </Link>
        </div>
      </div>
    </section>
  );
}
