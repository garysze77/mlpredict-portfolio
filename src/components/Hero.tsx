import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50/80 via-white to-slate-100/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-600 dark:text-primary-400">
          香港 · 機器學習開發
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          MLPredict
        </h1>
        <p className="mt-2 text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
          機器學習系統開發
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
          生產級 ML 預測平台 · 數據驅動決策 · 訂造機器學習解決方案
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-primary-500/25 transition hover:bg-primary-700 hover:shadow-primary-500/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            查看項目
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl border-2 border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-700"
          >
            免費諮詢
          </Link>
        </div>
      </div>
    </section>
  );
}
