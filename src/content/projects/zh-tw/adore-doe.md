---
locale: zh-tw
translationKey: adore-doe
title: "ADoRE-DoE：自適應實驗設計與殘差增強"
description: "整合 Active Learning 選點、RSM 建模與 ML 殘差修正的 DoE 工具包。目前為 Pre-alpha（文件與架構階段）。"
date: 2026-11-05
category: 實驗設計
tags: [Design of Experiments, RSM, Active Learning, Python, Pre-alpha]
featured: true
githubUrl: https://github.com/Kelvin-Hua05/ADoRE-DoE
---

## 概述

ADoRE-DoE（Adaptive Design of Experiments with Residual Enhancement）想把「實驗點怎麼選」與「模型怎麼補」整合成一個 Python 工具包，目標是用較少的實驗達到預先設定的預測準確度，同時保留 RSM 的可解釋性（明確方程式、ANOVA、Lack-of-Fit）。

## 目前狀態

**Pre-alpha：文件與架構階段。** 目前尚未實作任何研究演算法，repo 內有套件骨架、架構文件與開發規劃。下方的流程與模組都是**規劃內容**，不是已完成的功能。

## 規劃的流程

Screening → RSM Design → Active Learning → RSM 建模 → ML 殘差修正 → Benchmark → 最佳化 → 敏感度分析

- **Active Learning（Module 1）**：以 GPR 代理模型序貫建議下一個實驗點，目標是全域預測改善。
- **ML 殘差修正（Module 2）**：最終預測為 RSM 預測加上 ML 對殘差的修正，並以 out-of-fold 殘差避免資料洩漏。
- **四組 Benchmark**：Traditional / Adaptive DOE 與是否加入殘差修正，共四種組合，在相同條件下比較。

## 已完成與接下來

- 已完成：套件骨架（v0.0）、架構與研究方法文件、開發路線圖。
- 下一步：v0.1 Core 資料結構與 Plackett-Burman Screening。

## 連結

完整文件與路線圖請見 GitHub repository。
