/**
 * SAMPLE DATA — NOT REAL. Only rendered when the env var PUBLIC_SAMPLE_DATA=1
 * (e.g. `PUBLIC_SAMPLE_DATA=1 npm run dev`) so you can preview the layout.
 * Normal builds never show this.
 */
export const SAMPLE = import.meta.env.PUBLIC_SAMPLE_DATA === '1';

export const sample = {
  shortBio: {
    en: '[SAMPLE] A short introduction goes here. Describe what you study and what you are curious about.',
    'zh-tw': '【範例】請在此撰寫簡短自我介紹：你的研究方向與好奇的主題。',
  },
  longBio: {
    en: '[SAMPLE] A longer biography goes here. Replace this text in src/data/profile.ts.',
    'zh-tw': '【範例】較完整的個人簡介。請於 src/data/profile.ts 取代此段文字。',
  },
  education: [
    {
      institution: { en: '[SAMPLE] University Name', 'zh-tw': '【範例】大學名稱' },
      degree: { en: '[SAMPLE] M.S. in Electronics Engineering', 'zh-tw': '【範例】電子工程碩士' },
      start: '2000-00',
      end: '',
      description: { en: 'Sample entry — replace with verified information.', 'zh-tw': '範例資料——請替換為實際資訊。' },
    },
  ],
  experience: [
    {
      organization: { en: '[SAMPLE] Organization', 'zh-tw': '【範例】單位名稱' },
      role: { en: '[SAMPLE] Role', 'zh-tw': '【範例】職稱' },
      start: '2000-00',
      end: '',
      description: { en: 'Sample entry — replace with verified information.', 'zh-tw': '範例資料——請替換為實際資訊。' },
      achievements: [] as { en?: string; 'zh-tw'?: string }[],
    },
  ],
  skills: [
    {
      category: { en: '[SAMPLE] Programming Languages', 'zh-tw': '【範例】程式語言' },
      items: [{ name: 'Python' }, { name: 'Verilog' }],
    },
  ],
  social: {
    email: 'name@example.com',
    github: 'https://github.com/',
  },
};
