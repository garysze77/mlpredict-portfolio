'use client';

import Link from 'next/link';

/**
 * 概念 C：圓形容器 + 極簡折線（3 點 2 段）
 * 水平 Logo：[圓+折線圖標] MLPredict
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white"
      aria-label="MLPredict 首頁"
    >
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* 圓形背景 - 淺色用 primary，深色用較亮藍 */}
          <circle
            cx="16"
            cy="16"
            r="15"
            className="fill-primary-500 dark:fill-primary-400"
          />
          {/* 折線：左下 → 中上 → 右上 */}
          <polyline
            points="8,22 16,12 24,6"
            className="stroke-white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* 節點 */}
          <circle cx="8" cy="22" r="2" className="fill-white" />
          <circle cx="16" cy="12" r="2" className="fill-white" />
          <circle cx="24" cy="6" r="2" className="fill-white" />
        </svg>
      </span>
      <span>MLPredict</span>
    </Link>
  );
}
