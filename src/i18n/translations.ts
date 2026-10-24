import type { Locale } from './locales';

/** Single source of truth for ALL interface text. Add keys to both languages. */
const en = {
  meta: { skip: 'Skip to main content', siteSuffix: 'Portfolio' },
  nav: {
    label: 'Primary', home: 'Home', about: 'About', projects: 'Projects', blog: 'Blog', cv: 'CV', contact: 'Contact',
    openMenu: 'Open menu', closeMenu: 'Close menu',
    switchLanguage: 'Switch language', languageName: 'English',
    themeToLight: 'Switch to light theme', themeToDark: 'Switch to dark theme',
  },
  common: {
    viewAll: 'View all', readMore: 'Read more', present: 'Present', github: 'GitHub', demo: 'Live demo',
    externalNewTab: '(opens in a new tab)', sample: 'Sample', empty: 'Nothing here yet.',
    backHome: 'Back to home', all: 'All', minRead: '{n} min read', published: 'Published', updated: 'Updated',
    onThisPage: 'On this page', print: 'Print / save as PDF', backToTop: 'Back to top', copy: 'Copy', copied: 'Copied: {what}', copyFailed: 'Copy failed — select the text manually.',
  },
  home: {
    kicker: 'Graduate student · NYCU',
    viewProjects: 'View Projects', downloadCv: 'Download CV', contactMe: 'Contact',
    interests: 'Research Interests', featured: 'Featured Projects', skills: 'Skills',
    eduExp: 'Education & Experience', education: 'Education', experience: 'Experience',
    latest: 'Latest Articles', contact: 'Get in touch',
    contactLead: 'Open to discussions about research, collaboration and engineering opportunities.',
  },
  about: {
    title: 'About', lead: 'Background, interests and how I approach engineering problems.',
    intro: 'Introduction', academic: 'Academic background', interests: 'Research interests',
    technical: 'Technical interests', problemSolving: 'Problem-solving approach', learning: 'Learning philosophy',
    current: 'Current focus', future: 'Future research direction',
  },
  projects: {
    title: 'Projects', lead: 'Design, simulation and engineering work.',
    category: 'Category', tags: 'Technologies', date: 'Date', links: 'Links', related: 'Related projects',
    filterLabel: 'Filter by category', noResults: 'No projects in this category.',
    sampleNotice: 'This is a sample project that demonstrates the content structure. It is not a real achievement of the site owner.',
    backToList: 'All projects',
  },
  blog: {
    title: 'Blog', lead: 'Technical notes on TCAD, circuits and experimental design.',
    category: 'Category', tags: 'Tags', toc: 'Table of contents', previous: 'Previous', next: 'Next',
    related: 'Related articles', backToList: 'All articles',
    sampleNotice: 'This is sample content that demonstrates the article layout. It does not describe real work.',
  },
  cv: {
    title: 'Curriculum Vitae', lead: 'Academic and professional summary.',
    profile: 'Profile', education: 'Education', interests: 'Research Interests', skills: 'Technical Skills',
    research: 'Research Experience', work: 'Work Experience', projects: 'Selected Projects',
    publications: 'Publications', awards: 'Awards and Honors', certifications: 'Certifications',
    languages: 'Languages', contact: 'Contact', download: 'Download CV (PDF)',
  },
  contact: {
    title: 'Contact', lead: 'The best way to reach me is through the links below.',
    none: 'Contact links have not been configured yet.', emailMe: 'Send an email',
  },
  accent: { label: 'Accent', dual: 'Dual-Core', violet: 'Violet Engineering', cyan: 'Cyan Terminal' },
  terminal: {
    title: 'interactive terminal', sim: 'frontend simulation · not a real shell', lead: 'Try the commands below, or tap a shortcut. It is a small simulation that runs only in your browser.',
    hint: 'Type "help" to list commands.', inputLabel: 'Terminal command', run: 'Run', prompt: 'visitor@yuhua:~$', quick: 'Quick commands',
    unknown: 'command not found: {cmd} — type "help".', help: 'Available commands:',
    d_help: 'list commands', d_about: 'short introduction', d_research: 'research directions', d_education: 'education', d_skills: 'skills',
    d_projects: 'projects', d_contact: 'contact links', d_theme: 'accent: dual | violet | cyan', d_clear: 'clear the screen',
    noSkills: 'No skills listed yet.', noProjects: 'No projects published yet.', noContact: 'No contact links configured.',
    themeSet: 'accent set to {name}', themeUsage: 'usage: theme dual | violet | cyan',
  },
  research: {
    title: 'Research Directions', lead: 'Select a direction, then step through a generic workflow.',
    workflow: 'Generic workflow', workflowNote: 'Illustrative sequence for the field in general — not a claim that every project follows these exact steps.',
    tablist: 'Research directions', steps: 'Workflow steps',
  },
  hero: { typedLabel: 'Research directions', status1: 'SYSTEM ONLINE', status2: 'DUAL-CORE INTERFACE', decorative: 'Decorative interface labels', chipAlt: 'Abstract illustration of a dual-core chip with violet and cyan circuit paths' },
  footer: { rights: 'All rights reserved.', language: 'Language', links: 'Social links' },
  notFound: { title: 'Page not found', body: 'The page you are looking for does not exist or has moved.' },
  seo: {
    home: 'Yu-Hua, Wu — graduate student: TCAD simulation, circuit design and design of experiments.',
    about: 'About: academic background and research directions in TCAD, circuit design and DoE.',
    projects: 'Projects: IC design, EDA and semiconductor simulation work.',
    blog: 'Blog: technical notes on TCAD, circuit design and design of experiments.',
    cv: 'Academic CV: education, research interests, skills and experience.',
    contact: 'Contact links and professional profiles.',
  },
};

const zhTw: typeof en = {
  meta: { skip: '跳至主要內容', siteSuffix: '個人網站' },
  nav: {
    label: '主要導覽', home: '首頁', about: '關於', projects: '專案', blog: '部落格', cv: '履歷', contact: '聯絡',
    openMenu: '開啟選單', closeMenu: '關閉選單',
    switchLanguage: '切換語言', languageName: '繁體中文',
    themeToLight: '切換為淺色主題', themeToDark: '切換為深色主題',
  },
  common: {
    viewAll: '查看全部', readMore: '閱讀更多', present: '至今', github: 'GitHub', demo: '線上展示',
    externalNewTab: '（在新分頁開啟）', sample: '範例', empty: '目前沒有內容。',
    backHome: '回到首頁', all: '全部', minRead: '約 {n} 分鐘閱讀', published: '發佈日期', updated: '更新日期',
    onThisPage: '本頁目錄', print: '列印／另存為 PDF', backToTop: '回到頁首', copy: '複製', copied: '已複製：{what}', copyFailed: '複製失敗，請手動選取文字。',
  },
  home: {
    kicker: '研究生・國立陽明交通大學',
    viewProjects: '查看專案', downloadCv: '下載履歷', contactMe: '聯絡我',
    interests: '研究興趣', featured: '精選專案', skills: '技能',
    eduExp: '學歷與經歷', education: '學歷', experience: '經歷',
    latest: '最新文章', contact: '聯絡方式',
    contactLead: '歡迎討論研究、合作與工程相關機會。',
  },
  about: {
    title: '關於', lead: '背景、興趣，以及我處理工程問題的方式。',
    intro: '自我介紹', academic: '學術背景', interests: '研究興趣',
    technical: '技術興趣', problemSolving: '解決問題的方式', learning: '學習理念',
    current: '目前重點', future: '未來研究方向',
  },
  projects: {
    title: '專案', lead: '設計、模擬與工程實作。',
    category: '類別', tags: '技術', date: '日期', links: '連結', related: '相關專案',
    filterLabel: '依類別篩選', noResults: '此類別尚無專案。',
    sampleNotice: '這是用來示範內容結構的範例專案，並非網站擁有者的實際成果。',
    backToList: '所有專案',
  },
  blog: {
    title: '部落格', lead: 'TCAD、電路與實驗設計的技術筆記。',
    category: '分類', tags: '標籤', toc: '文章目錄', previous: '上一篇', next: '下一篇',
    related: '相關文章', backToList: '所有文章',
    sampleNotice: '這是用來示範文章版面的範例內容，並非實際工作紀錄。',
  },
  cv: {
    title: '學術履歷', lead: '學術與專業摘要。',
    profile: '個人簡介', education: '學歷', interests: '研究興趣', skills: '技術技能',
    research: '研究經歷', work: '工作經歷', projects: '精選專案',
    publications: '發表著作', awards: '獎項與榮譽', certifications: '證照',
    languages: '語言能力', contact: '聯絡方式', download: '下載履歷（PDF）',
  },
  contact: {
    title: '聯絡', lead: '最有效的聯繫方式如下。',
    none: '尚未設定聯絡連結。', emailMe: '寄送電子郵件',
  },
  accent: { label: '重點色', dual: '雙核心', violet: '電漿紫・工程', cyan: '霓虹青・終端' },
  terminal: {
    title: '互動終端機', sim: '前端模擬・非真實 shell', lead: '輸入下列指令，或點選快捷按鈕。這只是在瀏覽器內運作的小型模擬。',
    hint: '輸入 "help" 查看指令。', inputLabel: '終端機指令', run: '執行', prompt: 'visitor@yuhua:~$', quick: '快捷指令',
    unknown: '找不到指令：{cmd} — 請輸入 "help"。', help: '可用指令：',
    d_help: '列出指令', d_about: '簡短介紹', d_research: '研究方向', d_education: '學歷', d_skills: '技能',
    d_projects: '專案', d_contact: '聯絡連結', d_theme: '重點色：dual | violet | cyan', d_clear: '清除畫面',
    noSkills: '尚未列出技能。', noProjects: '尚未發佈專案。', noContact: '尚未設定聯絡連結。',
    themeSet: '重點色已切換為 {name}', themeUsage: '用法：theme dual | violet | cyan',
  },
  research: {
    title: '研究方向', lead: '選擇一個方向，並逐步瀏覽通用的工作流程。',
    workflow: '通用工作流程', workflowNote: '此為該領域的示意流程，並不代表每個專案都完全依此步驟進行。',
    tablist: '研究方向', steps: '流程步驟',
  },
  hero: { typedLabel: '研究方向', status1: 'SYSTEM ONLINE', status2: 'DUAL-CORE INTERFACE', decorative: '裝飾性介面標籤', chipAlt: '以紫色與青色電路走線構成的雙核心晶片抽象插圖' },
  footer: { rights: '版權所有。', language: '語言', links: '社群連結' },
  notFound: { title: '找不到頁面', body: '您要找的頁面不存在，或已被移動。' },
  seo: {
    home: '吳昱樺（Yu-Hua, Wu）：TCAD 模擬、電路設計與實驗設計。',
    about: '關於：學術背景、研究興趣與工程思維。',
    projects: '專案：IC 設計、EDA 與半導體模擬相關實作。',
    blog: '部落格：IC 設計、EDA、TCAD 與工程流程的技術筆記。',
    cv: '學術履歷：學歷、研究興趣、技能與經歷。',
    contact: '聯絡方式與專業個人頁面。',
  },
};

export const translations: Record<Locale, typeof en> = { en, 'zh-tw': zhTw };
export type Dict = typeof en;

export const useT = (locale: Locale): Dict => translations[locale];
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
