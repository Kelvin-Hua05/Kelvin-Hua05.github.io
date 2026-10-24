# 雙語半導體工程個人網站與學術履歷

以 **Astro 6 + TypeScript (strict) + Tailwind CSS 4** 製作的純靜態網站，提供 **繁體中文 (`/zh-tw/`)** 與 **English (`/en/`)** 完整體驗，可透過 GitHub Actions 自動部署至 GitHub Pages。

> 已填入姓名、研究方向、學校與 GitHub；其餘未提供的資料會自動隱藏。上線前請依第 20 節清單檢查。

## 視覺風格：Cyberpunk Dual-Core（雙核心）

- **紫色（Core A）**＝身分與工程；**青色（Core B）**＝終端機、資料與互動。兩者只在 Hero 以漸層同時出現，其餘區塊依角色使用。
- 導覽列右上角（手機為選單內）可切換三種重點色：**Dual-Core（預設）／Violet Engineering／Cyan Terminal**；另有深色／淺色切換。偏好儲存在 `localStorage` 的 `cdp:v1:preferences`，儲存不可用時網站仍正常運作。
- 色彩 token 都在 `src/styles/theme.css`（`data-accent` × `data-theme` 共 6 組），需要微調顏色只改這個檔案。
- **互動元素**：Hero 的雙核心晶片 SVG（滑鼠視差、掃描線、走線流動）、研究方向打字效果、**互動終端機**（`help`、`about`、`research`、`education`、`skills`、`projects`、`contact`、`theme <dual|violet|cyan>`、`clear`，支援 ↑↓ 歷史與快捷按鈕）、**研究方向探索器**（鍵盤可操作的分頁與流程步驟）、卡片游標光暈、捲動淡入、回到頁首、聯絡頁一鍵複製。
- 終端機是**純前端模擬**，不執行任何指令，輸出一律以純文字寫入。所有動畫在系統設定「減少動態效果」時會停用（打字效果改為靜態文字）。
- 研究方向的說明與流程是該領域的**通用示意**，在 `src/data/research.ts`，請依自己的實際內容改寫。

## 目前已填入的個人資料
姓名、中文名、研究方向（TCAD 模擬、電路設計、實驗設計）、學校（國立陽明交通大學工業工程與管理學系；電信工程研究所碩士班）、GitHub 連結。**未提供的資料（學位層級、就學期間、Email、技能、專案）一律留空並自動隱藏**，請在 `src/data/` 補上。

## 專案與文章範本
`src/content/projects/*/template-project.md` 與 `src/content/blog/*/template-post.md` 是 `draft: true` 的寫作範本：正式站不會輸出。複製後改檔名、把 `draft` 改為 `false` 即可發佈。

## 1. 專案概述
首頁、關於、專案（含詳細頁與分類篩選）、部落格（目錄、上下篇、相關文章、閱讀時間）、學術履歷（含列印樣式）、聯絡、404。深色為預設主題，另有淺色主題，首次造訪依系統偏好。

## 2. 技術堆疊
Astro 6.4（static output）、`@astrojs/sitemap`、Tailwind CSS 4（`@tailwindcss/vite`）、Content Collections + Zod、Shiki 語法上色、lucide-static 圖示。客戶端 JS 全為小型原生腳本（主題／重點色、手機選單、終端機、研究探索器、專案篩選、複製等，合計約數 KB），無 React。
> 注意：`package.json` 另外固定 `vite@7`，因為 Astro 6 使用 Vite 7，若不固定，Tailwind 外掛會安裝 Vite 8 而導致建置失敗。

## 3. 目錄結構
```text
src/
  components/   Navbar(含手機選單)、Footer、Hero、ProjectCard、ArticleCard、Timeline、SkillGroup、SEO、ThemeToggle、LanguageSwitcher…
  layouts/      BaseLayout、ProjectLayout、BlogPostLayout
  pages/        index.astro（雙語入口）、404.astro、[locale]/（zh-tw 與 en 共用的路由）
  content/      projects/{en,zh-tw}/*.md   blog/{en,zh-tw}/*.md
  data/         profile、education、experience、skills、social、cv、site、sample
  i18n/         translations.ts（所有介面文字）、locales.ts
  lib/          content.ts（查詢、閱讀時間）、url.ts（base 處理）、rehype-figure.mjs
  styles/       theme.css（設計 token）、global.css
public/         favicon.svg、robots.txt、images/、files/（CV PDF）
.github/workflows/deploy.yml
scripts/check-links.py
```
兩個語系共用 `src/pages/[locale]/`，以 `getStaticPaths` 產生 `/zh-tw/…` 與 `/en/…`，沒有重複的路由程式碼。

## 4. 先決條件
Node.js **≥ 22.12**、npm ≥ 10、Git。

## 5. 本機安裝 / 6. 開發 / 7. 建置 / 8. 預覽
```bash
npm install
npm run dev        # http://localhost:4321/
npm run build      # 輸出至 dist/
npm run preview    # 預覽 dist/
npm run check      # astro check
npm run typecheck  # astro check + tsc --noEmit
```
預覽版面（顯示假資料）：`PUBLIC_SAMPLE_DATA=1 npm run dev`（Windows PowerShell：`$env:PUBLIC_SAMPLE_DATA=1; npm run dev`）。此模式的資料定義於 `src/data/sample.ts`，正式建置**不會**包含。
檢查連結：`npm run build && python3 scripts/check-links.py /`

## 9. 編輯個人資料
| 檔案 | 內容 |
| --- | --- |
| `src/data/profile.ts` | 姓名（`nameEn` 目前為 `Your Name`，**請替換**）、中文名、標題 headline、簡介 `shortBio`/`longBio`、`image`（如 `images/profile.webp`）、研究興趣、About 各段落 |
| `src/data/education.ts` / `experience.ts` | 學歷／經歷；`end` 留空代表「至今」；`kind: 'research'` 會顯示於 CV 的研究經歷 |
| `src/data/skills.ts` | 技能分組（只放名稱，不放百分比） |
| `src/data/social.ts` | email、GitHub、LinkedIn、個人網站、其他；留空即隱藏 |
| `src/data/cv.ts` | 發表、獎項、證照、語言 |
| `src/data/site.ts` | 網站標題／描述、OG 圖片、頁尾隱私說明、CV PDF 路徑 |
文字欄位使用 `{ en: '…', 'zh-tw': '…' }`；缺少的語言會被隱藏。空字串／空陣列不會產生空標題。

## 10. 編輯介面翻譯
所有介面文字集中於 `src/i18n/translations.ts`，英文與繁中兩份物件型別相同，漏掉任何 key 時 `npm run check` 會報錯。

## 11. 新增雙語專案
在 `src/content/projects/en/my-project.md` 與 `src/content/projects/zh-tw/my-project.md` 建立檔案（檔名即網址 slug，可不同）。兩者使用相同的 `translationKey` 才會互相連結並產生 hreflang。
```yaml
---
locale: en            # zh-tw 版填 zh-tw
translationKey: my-project
title: ...
description: ...
date: 2026-05-01
category: Digital Design
tags: [Verilog]
featured: true        # 首頁最多顯示 3 個
draft: false          # true 則不輸出
order: 10
thumbnail: images/projects/my-project.webp   # 選填，相對於 public/
thumbnailAlt: ...
githubUrl: https://github.com/...             # 選填
demoUrl: https://...                          # 選填
relatedProjectIds: [other-translation-key]
---
```
內文用 `##` 章節（概述、問題、目標…），沒寫的章節就不會出現。只有一種語言時，語言切換器會自動回到該語言的專案列表，不會出現壞連結。**請勿虛構實驗數據。**

## 12. 新增部落格文章
放在 `src/content/blog/<locale>/slug.md`。欄位：`title`、`description`、`excerpt`、`date`、`updatedDate`、`tags`、`category`、`draft`、`translationKey`、`coverImage`、`author`、`readingTime`。
閱讀時間若未填則自動估算：英文以 200 字／分鐘、中文以 400 字／分鐘計算，排除程式碼區塊，最少 1 分鐘。含三個以上 `##` 標題的文章會顯示目錄。`draft: true` 的文章不會出現在正式輸出（`npm run dev` 時可預覽）。

## 13. 新增圖片
放在 `public/images/`。Markdown 內以根路徑撰寫，建置時會自動加上 base：
```md
![替代文字](/images/projects/foo.webp "圖 1. 說明文字")
```
有加引號標題時會輸出為 `<figure>` + `<figcaption>`。請先將圖片壓縮為 WebP，寬度建議 ≤ 1600px。數學式目前以行內程式碼表示（未引入 KaTeX，以降低 JS／CSS 體積）。

## 14. 替換 CV PDF
將檔案放入 `public/files/cv-en.pdf` 與 `public/files/cv-zh-tw.pdf`（路徑可在 `src/data/site.ts` 的 `cvFiles` 修改）。**檔案不存在時，下載按鈕會自動隱藏**，不會連到不存在的 PDF。CV 頁另有「列印／另存為 PDF」按鈕與列印樣式。

## 15–16. GitHub Pages 與 Actions 部署
1. 在 GitHub 建立名為 `你的帳號.github.io` 的 repository。
2. `git remote add origin …` 後推送程式碼到 `main` 分支。
3. 開啟 repository **Settings**。
4. 開啟 **Pages**。
5. **Build and deployment → Source** 選擇 **GitHub Actions**。
6. 到 **Actions** 分頁查看 *Deploy to GitHub Pages* 工作流程（推送 `main` 或手動 `workflow_dispatch` 觸發）。
7. 成功後開啟 `https://你的帳號.github.io/`。

工作流程自動以 `github.repository_owner` 組成 `SITE_URL`，`BASE_PATH` 預設 `/`（使用者網站）。若是一般專案網站（`https://帳號.github.io/repo/`），在 Settings → Secrets and variables → Actions → **Variables** 新增 `BASE_PATH=/repo/`；本機也可用 `BASE_PATH=/repo/ SITE_URL=https://帳號.github.io npm run build`。
同時請手動修改 `public/robots.txt` 內的 Sitemap 網址。

## 17. 自訂網域
在 Pages 設定填入網域，並新增 `public/CNAME`（內容為網域）。將 repository variable `SITE_URL` 設為 `https://你的網域`，`BASE_PATH` 維持 `/`，並更新 `robots.txt`。

## 18–19. 疑難排解
- **建置出現 `tsconfigPaths` 錯誤**：Vite 版本不一致，執行 `npm ls vite`，應全部為 7.x。
- **連結／CSS 404**：檢查 `BASE_PATH` 是否與部署位置一致（使用者網站為 `/`）。
- **Pages 顯示 404**：確認 Source 為 *GitHub Actions*，且預設分支名稱為 `main`（否則修改 `deploy.yml`）。
- **工作流程權限錯誤**：`deploy.yml` 已宣告 `pages: write` 與 `id-token: write`；組織 repository 可能需要管理員啟用 Pages。
- **`npm ci` 失敗**：確認已提交 `package-lock.json`。
- **content schema 錯誤**：訊息會指出檔案與欄位；常見原因是缺少 `translationKey` 或網址格式錯誤。

## 20. 上線前內容與隱私檢查清單
- [ ] `profile.ts` 的姓名、headline、簡介符合事實
- [ ] 範本檔 `template-*.md` 維持 `draft: true`，或已改寫為真實內容
- [ ] 學歷／經歷／技能／社群連結皆為已驗證資料
- [ ] 已放入 CV PDF，或確認按鈕已隱藏
- [ ] `robots.txt` 與 `og-cover.png`（1200×630）已更新
- [ ] 無虛構成果、論文、獎項或聯絡資訊
- [ ] 搜尋 `YOUR_USERNAME`、`SAMPLE`、`範例` 確認無殘留
- [ ] 圖片皆有 alt 文字
