# MLPredict - 機器學習作品集網站

生產級 ML 預測平台作品展示站，網址：**https://mlpredict.app**

## 技術棧

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- 暗黑模式切換、響應式、SEO、PWA ready、Vercel 部署

## 環境變數（Resend 發信與訂閱名單）

聯絡表單與訂閱功能經 [Resend](https://resend.com) 發信，需設定以下環境變數：

1. **複製範例檔**：`cp .env.example .env`
2. **填寫 `.env`**：
   - **`RESEND_API_KEY`**（必填）：到 [Resend Dashboard](https://resend.com/api-keys) 建立 API Key，權限需包含 **Contacts**（訂閱名單）與發信。
   - **`RESEND_AUDIENCE_ID`**（訂閱功能必填）：到 Resend → **Audiences** → 建立或選取一個 Audience → 複製其 **Audience ID**（UUID 格式）。
   - **`EMAIL_FROM`**：發信顯示（如 `MLPredict <onboarding@yourdomain.com>`），網域須在 Resend **Domains** 驗證並加好 DNS。
   - **`CONTACT_TO`**：聯絡表單與新訂閱通知的收件信箱。

未設定時，聯絡/訂閱 API 會回 503；發信網域未驗證時 Resend 可能回 403/500，請在 Resend 完成 Domain 與 DNS 設定。

**聯絡表單防機械人**：內建 **honeypot**（隱藏欄位），無需設定即生效。可選加 **Cloudflare Turnstile**：在 `.env` 設 `NEXT_PUBLIC_TURNSTILE_SITE_KEY` 與 `TURNSTILE_SECRET_KEY`（於 [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) 建立 Widget 取得），表單會顯示驗證框並於 API 驗證 token。

## 開發

在專案目錄**本機終端機**執行：

```bash
cd /var/www/MLPredict   # 或你的專案路徑
npm install             # 若未安裝過
cp .env.example .env    # 再依上方填寫 .env
npm run dev
```

開發伺服器使用 **port 3001**（避免與其他系統的 3000 衝突）。瀏覽 **http://localhost:3001**。

### 下一步建議

1. **本地預覽**：`npm run dev` → 打開 http://localhost:3001 檢查 Hero、項目卡、見證輪播、Footer、暗黑模式、手機版。
2. **Production 建置**：`npm run build` → `npm start`，確認無錯誤。
3. **部署 Vercel**：連到 Git 或 `vercel` CLI，在 Vercel 專案設定網域 **mlpredict.app**。
4. **Hero 背景圖**（可選）：在 `public/` 放 **`hero-banner.webp`**（建議 1920×1080；WebP 較輕量），首頁 Hero 會自動用作背景；沒有檔案時會用漸層。可用：儀表板截圖、數據可視化、抽象科技圖等，文字上會有深色遮罩保持可讀。
5. **內容更新**：在 `src/components/Projects.tsx` 把各項目的 `liveUrl`、`githubUrl` 改成真實連結；可於 `public/images/` 放專案截圖並在 `ProjectCard` 改用 `next/image`。
6. **PWA 圖示**（可選）：在 `public/` 加入 `icon-192.png`、`icon-512.png`，並在 `public/manifest.json` 補回 `icons` 陣列。

### 若出現 `cannot access 'node_modules': No such file or directory`

表示 `npm install` 未成功跑完，請：

1. **在系統終端機執行**（例如 Ubuntu 的 Terminal、Windows 的 CMD/PowerShell），不要用 Cursor 內建的 Run 執行。
2. 確認可連線：`ping registry.npmjs.org` 或 `curl -I https://registry.npmjs.org`。
3. 若在內網或中國大陸，可改用鏡像：在專案根目錄建立或編輯 `.npmrc`，加入一行  
   `registry=https://registry.npmmirror.com`  
   然後再執行 `npm install`。
4. 清除快取再試：`npm cache clean --force`，然後 `npm install`。

## 建置與部署

```bash
npm run build
npm start
```

### 部署至 Vercel

1. 將專案連到 Vercel（Git 或 `vercel` CLI）。
2. 網域設為 `mlpredict.app`（在 Vercel 專案設定中加入網域）。
3. 建置指令：`npm run build`（預設已於 `vercel.json` 設定）。
4. **環境變數**：在 Vercel 專案 **Settings → Environment Variables** 加入 `RESEND_API_KEY`、`RESEND_AUDIENCE_ID`、`EMAIL_FROM`、`CONTACT_TO`（勿把 `.env` 推上 Git）。

`vercel.json` 已設定 `regions: ["hkg1"]`，可選香港節點。

## PWA

- `public/manifest.json` 已設定，`layout.tsx` 已加入 manifest 與 theme-color。
- 請在 `public/` 下加入 `icon-192.png` 與 `icon-512.png` 作為 PWA 圖示（可選）。
- 若要離線與安裝體驗，可再整合 [next-pwa](https://github.com/shadowwalker/next-pwa) 或自訂 Service Worker。

## 專案結構

- `src/app/` - 頁面與 layout、SEO meta
- `src/app/about/` - 關於我們頁
- `src/app/api/contact/`、`src/app/api/subscribe/` - Resend 聯絡與訂閱 API
- `src/app/sitemap.ts`、`src/app/robots.ts` - 自動生成 sitemap.xml、robots.txt
- `src/components/` - Hero、Stats、Projects、Testimonials、ContactForm、ContactSection、Footer、Header、ThemeProvider
- `src/types/` - TypeScript 型別
- `.env.example` - 環境變數範例（複製為 `.env` 並填寫，勿提交 `.env`）
- `public/hero-banner.webp` - Hero 背景圖；`public/manifest.json` - PWA manifest

## SEO 關鍵字

香港ML開發、賽馬預測、股票信號、機器學習、ML預測平台、XGBoost、Finnhub

---

## 關於 `npm audit` 剩餘警告

若仍顯示 **next** 的 moderate（PPR Resume Endpoint 記憶體消耗）：

- **不要執行** `npm audit fix --force`，會把 Next 降回 14.x。
- 專案使用 **Next 15.5.11（stable）**，官方說明 **15.0.x～15.5.x 穩定版已修補**；漏洞主要影響 **canary** 及啟用 `experimental.ppr` 或 `NEXT_PRIVATE_MINIMAL_MODE=1` 的環境，本專案未使用，風險可接受。
- 若想完全消除該則 audit，可考慮之後升級至 Next 16.x（需再測試相容性）。
