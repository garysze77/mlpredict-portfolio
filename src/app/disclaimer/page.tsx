import Link from 'next/link';

export const metadata = {
  title: '免責聲明 | MLPredict',
  description: 'MLPredict 網站免責聲明與使用條款。',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:underline dark:text-primary-400"
        >
          ← 返回首頁
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          免責聲明
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          最後更新：{new Date().toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. 適用範圍</h2>
            <p className="mt-2 leading-relaxed">
              本免責聲明適用於 MLPredict 所營運的網站 mlpredict.app（「本網站」）及其所載的全部內容、資訊、產品介紹、技術說明、預測或分析相關表述（下稱「網站內容」）。使用本網站即表示閣下確認已閱讀、理解並同意受本免責聲明約束。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. 非專業意見與一般參考</h2>
            <p className="mt-2 leading-relaxed">
              本網站所載的一切內容（包括但不限於項目介紹、準確率或表現數據、預測結果、技術描述及任何與賽馬、股票、投資、財務或商業決策相關的表述）僅供一般參考及資訊展示之用，並不構成任何形式的投資建議、投注建議、法律意見、稅務意見、財務意見或專業顧問意見。閣下不應單憑本網站內容作出任何投資、投注或商業決定。在作出任何決定前，閣下應根據自身情況徵詢合資格的獨立專業人士意見。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. 過往表現與預測不具保證</h2>
            <p className="mt-2 leading-relaxed">
              本網站所提及的任何準確率、表現數據、預測結果或案例（不論涉及賽馬、股票、營利預測或其他領域）均可能基於過往數據、模擬或示例，僅作說明用途。過往表現或模擬結果並不代表未來表現，我們不保證任何預測、估計或表述將會實現。實際結果可能因市場環境、數據變動、模型限制或其他因素而出現重大差異。依賴本網站內容而作出的任何決定，其風險概由閣下自行承擔。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. 第三方連結與內容</h2>
            <p className="mt-2 leading-relaxed">
              本網站可能載有指向第三方網站或服務的連結或參考。該等連結僅為便利而提供，我們對該等第三方網站或服務的內容、私隱政策、可用性或準確性不負任何責任。閣下進入任何第三方網站或使用其服務，須自行查閱該第三方的條款及政策，並自負風險。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. 網站可用性與技術限制</h2>
            <p className="mt-2 leading-relaxed">
              我們力求本網站正常運作及內容準確，惟我們不保證本網站或其所載內容將不間斷、無錯誤、無遺漏或完全安全。本網站可能因維修、更新、技術故障、網絡問題或不可抗力而暫時無法使用。在法律所允許的最大範圍內，我們對因使用或無法使用本網站、或依賴網站內容而引致的任何直接、間接、附帶、後果性或其他損失（包括但不限於利潤損失、數據損失或業務中斷）概不負責。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. 知識產權</h2>
            <p className="mt-2 leading-relaxed">
              本網站所載的文本、圖像、標誌、版面設計及其他內容（除另有註明外）的知識產權歸 MLPredict 或相關權利人所有。未經我們事先書面同意，閣下不得複製、改編、分發或用於商業目的。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. 修訂</h2>
            <p className="mt-2 leading-relaxed">
              我們保留隨時修訂本免責聲明的權利。修訂後的版本將於本頁刊登，並註明最後更新日期。閣下於修訂後繼續使用本網站，即視為接受經修訂的免責聲明。建議閣下定期查閱本頁以知悉最新版本。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">8. 管轄法律</h2>
            <p className="mt-2 leading-relaxed">
              本免責聲明受香港特別行政區法律管轄並據其解釋。就本免責聲明或本網站所產生的任何爭議，須受香港法院的非專屬管轄權管轄。
            </p>
          </section>

          <p className="pt-4 text-sm text-slate-500 dark:text-slate-400">
            如有任何疑問，請透過
            <Link href="/#contact" className="text-primary-600 hover:underline dark:text-primary-400">聯絡我們</Link>
            與我們聯繫。
          </p>
        </div>
      </div>
    </main>
  );
}
