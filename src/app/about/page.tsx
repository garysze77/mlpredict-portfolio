import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '關於我們 | MLPredict',
  description: 'MLPredict 專注生產級機器學習系統開發，香港 ML 開發、賽馬預測、股票信號與訂造解決方案。',
  openGraph: {
    title: '關於我們 | MLPredict',
    description: '生產級機器學習系統開發，香港 ML 開發、賽馬預測、股票信號。',
    url: 'https://mlpredict.app/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          關於我們
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          MLPredict 專注生產級機器學習系統開發，為企業與個人提供數據驅動的預測與決策方案。
        </p>

        <section className="mt-10 space-y-6 text-slate-700 dark:text-slate-300">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">我們做甚麼</h2>
          <p>
            我們將機器學習與業務場景結合，涵蓋賽馬預測、美股信號、商會管理、營利預測等領域，從數據清洗、特徵工程到模型部署與監控，提供一站式訂造解決方案。
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">技術與工具</h2>
          <p>
            常用技術包括 XGBoost、Python、Node.js、Next.js、PostgreSQL 等；並整合 Finnhub、即時推送等外部服務，確保系統穩定、可擴展。
          </p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">聯絡我們</h2>
          <p>
            查詢報價或合作，歡迎透過首頁的{' '}
            <Link href="/#contact" className="text-mlpredict-600 underline hover:text-mlpredict-700 dark:text-mlpredict-400">
              聯絡表單
            </Link>{' '}
            或電郵與我們聯絡。
          </p>
        </section>

        <p className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mlpredict-600 hover:underline dark:text-mlpredict-400"
          >
            ← 返回首頁
          </Link>
        </p>
      </div>
    </main>
  );
}
