import type { L10n } from '../i18n/locales';

/**
 * Research directions shown in the interactive explorer.
 * `summary` and `steps` are GENERIC explanations of each field (not claims about specific results).
 */
export interface ResearchStep { name: L10n; desc: L10n }
export interface ResearchDirection { id: string; title: L10n; summary: L10n; tags: string[]; steps: ResearchStep[] }

export const research: ResearchDirection[] = [
  {
    id: 'tcad',
    title: { en: 'TCAD Simulation', 'zh-tw': 'TCAD 模擬' },
    summary: {
      en: 'TCAD (Technology Computer-Aided Design) uses numerical simulation to study semiconductor process steps and the electrical behaviour of devices.',
      'zh-tw': 'TCAD（Technology Computer-Aided Design）以數值模擬研究半導體製程步驟與元件的電性行為。',
    },
    tags: ['Device simulation', 'Process simulation', 'Semiconductor physics'],
    steps: [
      { name: { en: 'Structure', 'zh-tw': '結構定義' }, desc: { en: 'Define device geometry, materials and doping profiles.', 'zh-tw': '定義元件幾何、材料與摻雜分布。' } },
      { name: { en: 'Physics models', 'zh-tw': '物理模型' }, desc: { en: 'Select transport, mobility and recombination models suited to the question.', 'zh-tw': '依研究問題選擇傳輸、遷移率與復合等物理模型。' } },
      { name: { en: 'Mesh', 'zh-tw': '網格' }, desc: { en: 'Refine the mesh where fields and carrier gradients change quickly.', 'zh-tw': '在電場與載子梯度變化劇烈處加密網格。' } },
      { name: { en: 'Simulate', 'zh-tw': '模擬' }, desc: { en: 'Run DC, transient or small-signal analyses and check convergence.', 'zh-tw': '執行直流、暫態或小訊號分析，並檢查收斂性。' } },
      { name: { en: 'Analyse', 'zh-tw': '分析' }, desc: { en: 'Extract characteristics and compare against measurements or references.', 'zh-tw': '萃取特性並與量測或文獻比較。' } },
    ],
  },
  {
    id: 'circuit',
    title: { en: 'Circuit Design', 'zh-tw': '電路設計' },
    summary: {
      en: 'Circuit design turns a specification into a verified circuit: choosing a topology, sizing devices and checking performance by simulation.',
      'zh-tw': '電路設計將規格轉化為經過驗證的電路：選擇架構、決定元件尺寸，並以模擬檢查效能。',
    },
    tags: ['Schematic', 'SPICE-style simulation', 'Verification'],
    steps: [
      { name: { en: 'Specification', 'zh-tw': '規格' }, desc: { en: 'State gain, bandwidth, power, noise or timing targets.', 'zh-tw': '訂定增益、頻寬、功耗、雜訊或時序目標。' } },
      { name: { en: 'Topology', 'zh-tw': '架構' }, desc: { en: 'Choose a circuit architecture and first-pass device sizes.', 'zh-tw': '選擇電路架構與初步元件尺寸。' } },
      { name: { en: 'Simulate', 'zh-tw': '模擬' }, desc: { en: 'Run DC, AC, transient and corner simulations.', 'zh-tw': '進行直流、交流、暫態與製程角落模擬。' } },
      { name: { en: 'Iterate', 'zh-tw': '迭代' }, desc: { en: 'Adjust sizing and bias until the targets are met.', 'zh-tw': '調整尺寸與偏壓直到達成目標。' } },
      { name: { en: 'Verify', 'zh-tw': '驗證' }, desc: { en: 'Check robustness across variation before layout or hand-off.', 'zh-tw': '在佈局或交付前檢查對變異的穩健性。' } },
    ],
  },
  {
    id: 'doe',
    title: { en: 'Design of Experiments', 'zh-tw': '實驗設計' },
    summary: {
      en: 'Design of Experiments (DoE) plans runs systematically so the effects of several factors, and their interactions, can be estimated with fewer experiments.',
      'zh-tw': '實驗設計（DoE）有系統地規劃實驗組合，以較少的實驗次數估計多個因子及其交互作用的效應。',
    },
    tags: ['Factorial design', 'ANOVA', 'Response surface'],
    steps: [
      { name: { en: 'Factors', 'zh-tw': '因子' }, desc: { en: 'Define responses, factors and the levels to test.', 'zh-tw': '定義響應變數、因子與測試水準。' } },
      { name: { en: 'Design matrix', 'zh-tw': '設計矩陣' }, desc: { en: 'Choose a design (e.g. factorial) and randomise run order.', 'zh-tw': '選擇設計（如因子設計）並隨機化實驗順序。' } },
      { name: { en: 'Run', 'zh-tw': '執行' }, desc: { en: 'Collect data, with replicates where noise matters.', 'zh-tw': '收集數據，必要時重複實驗以評估雜訊。' } },
      { name: { en: 'Analyse', 'zh-tw': '分析' }, desc: { en: 'Use ANOVA and effect plots to separate signal from noise.', 'zh-tw': '以變異數分析與效應圖區分訊號與雜訊。' } },
      { name: { en: 'Optimise', 'zh-tw': '最佳化' }, desc: { en: 'Fit a model, predict an optimum and confirm with a run.', 'zh-tw': '建立模型、預測最佳條件並以驗證實驗確認。' } },
    ],
  },
];
