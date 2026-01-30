import Link from 'next/link';

export const metadata = {
  title: '私隱政策 | MLPredict',
  description: 'MLPredict 網站私隱政策與個人資料處理聲明。',
};

export default function PrivacyPage() {
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
          私隱政策
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          最後更新：{new Date().toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. 引言</h2>
            <p className="mt-2 leading-relaxed">
              MLPredict（「我們」、「本網站」或「本公司」）致力保障閣下的個人資料私隱。本私隱政策說明我們如何收集、使用、儲存及披露經由 mlpredict.app（「本網站」）所收集的個人資料，並符合香港《個人資料（私隱）條例》（第 486 章）（「條例」）的規定。使用本網站即表示閣下同意本政策所載的處理方式。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. 資料使用者與聯絡方式</h2>
            <p className="mt-2 leading-relaxed">
              就本網站而言，資料使用者為 MLPredict。閣下如對本政策或個人資料處理有任何查詢、要求查閱或更正個人資料，可透過本網站「聯絡我們」欄目所載的電郵、WhatsApp 或 Telegram 與我們聯絡。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. 收集的個人資料種類</h2>
            <p className="mt-2 leading-relaxed">
              我們可能收集的個人資料包括但不限於：（a）聯絡資料（如姓名、電郵地址、電話號碼）；（b）當閣下透過本網站提交查詢、訂閱電子通訊或使用聯絡表單時所提供的訊息內容；（c）技術及使用資料（如 IP 地址、瀏覽器類型、裝置識別、造訪時間及頁面瀏覽記錄），以用於網站運作、保安及改善用戶體驗。我們僅在合理必要及與上述目的相關的範圍內收集個人資料。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. 收集目的及使用方式</h2>
            <p className="mt-2 leading-relaxed">
              我們收集及使用個人資料的目的包括：處理及回覆閣下的查詢或申請；向訂閱者發送項目更新、產品資訊或營銷通訊（閣下可隨時取消訂閱）；改善本網站內容、功能及服務；進行統計分析及網站效能監測；履行法律或監管義務；以及保障本網站及用戶的安全。我們不會將閣下的個人資料出售予第三方作營銷用途。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. 法律依據</h2>
            <p className="mt-2 leading-relaxed">
              我們處理個人資料的法律依據包括：閣下的同意（如訂閱通訊）；履行與閣下之間的契約或閣下在訂立契約前所提出的要求；我們的正當利益（如網站保安、改善服務），且該等利益不凌駕於閣下的權益；以及為遵守法律義務所必要者。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. 資料保存與保安</h2>
            <p className="mt-2 leading-relaxed">
              我們會將個人資料保存至達致收集目的所需之期限，或法律所規定的更長期限。保存期屆滿後，我們會安全地刪除或匿名化有關資料。我們採取合理及適當的技術及行政措施（包括存取控制、加密及安全傳輸）以保護個人資料免遭未經授權的查閱、遺失、更改或披露。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. 資料披露與轉移</h2>
            <p className="mt-2 leading-relaxed">
              我們可能在以下情況下披露或轉移個人資料：向提供網站託管、電郵發送或技術支援的服務供應商（該等供應商受保密及資料處理義務約束）；為遵守法律、法庭命令或政府要求；或為保障我們的合法權益。若資料轉移至香港以外地區，我們會確保該地區提供相若的私隱保障，或採取適當的保障措施。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">8. Cookies 及類似技術</h2>
            <p className="mt-2 leading-relaxed">
              本網站可能使用 cookies、本地儲存或類似技術，以識別閣下的裝置、記住偏好設定及收集使用數據。閣下可透過瀏覽器設定管理或拒絕 cookies，惟部分功能可能因而受影響。詳情可參閱瀏覽器之說明。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">9. 閣下的權利</h2>
            <p className="mt-2 leading-relaxed">
              根據條例，閣下有權要求查閱及更正我們所持有關於閣下的個人資料。閣下亦有權在適用法律許可的範圍內要求刪除資料、限制處理或反對某些處理，以及就基於同意而進行的處理撤回同意。如閣下認為我們未遵守條例，可向香港個人資料私隱專員公署作出投訴。行使上述權利或提出查詢，請透過本網站「聯絡我們」與我們聯絡。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">10. 政策修訂</h2>
            <p className="mt-2 leading-relaxed">
              我們可能不時修訂本私隱政策。修訂後的政策將於本頁刊登，並註明最後更新日期。重大變更時，我們可能透過電郵或網站公告另行通知。閣下於修訂後繼續使用本網站，即視為接受經修訂的政策。
            </p>
          </section>

          <p className="pt-4 text-sm text-slate-500 dark:text-slate-400">
            如有任何關於本私隱政策的疑問，請透過
            <Link href="/#contact" className="text-primary-600 hover:underline dark:text-primary-400">聯絡我們</Link>
            與我們聯繫。
          </p>
        </div>
      </div>
    </main>
  );
}
