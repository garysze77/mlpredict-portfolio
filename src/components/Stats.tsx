const stats = [
  { value: '4+', label: '專案上線' },
  { value: '80%+', label: '預測準確率' },
  { value: '實時', label: '信號推送' },
  { value: '訂造', label: 'ML 解決方案' },
];

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-4 py-12 dark:border-slate-800 dark:bg-slate-800/50 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-mlpredict-600 dark:text-mlpredict-400 sm:text-3xl">
                {value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
