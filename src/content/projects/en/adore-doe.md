---
locale: en
translationKey: adore-doe
title: "ADoRE-DoE: Adaptive Design of Experiments with Residual Enhancement"
description: "A DoE toolkit combining active-learning point selection, RSM modelling and ML residual correction. Currently pre-alpha (documentation and architecture stage)."
date: 2026-11-05
category: Design of Experiments
tags: [Design of Experiments, RSM, Active Learning, Python, Pre-alpha]
featured: true
githubUrl: https://github.com/Kelvin-Hua05/ADoRE-DoE
---

## Overview

ADoRE-DoE (Adaptive Design of Experiments with Residual Enhancement) aims to combine "which experiments to run" and "how to improve the model" in one Python toolkit. The goal is to reach a target prediction accuracy with fewer experiments while keeping the interpretability of RSM (explicit equations, ANOVA, lack-of-fit).

## Current status

**Pre-alpha: documentation and architecture stage.** No research algorithm has been implemented yet. The repository contains a package skeleton, architecture documents and a development plan. Everything below describes **planned** work, not finished features.

## Planned workflow

Screening → RSM design → Active learning → RSM modelling → ML residual correction → Benchmark → Optimisation → Sensitivity analysis

- **Active learning (Module 1):** a GPR surrogate sequentially suggests the next experiment, aiming at global prediction improvement.
- **ML residual correction (Module 2):** the final prediction is the RSM prediction plus an ML correction of its residuals, using out-of-fold residuals to avoid leakage.
- **Four-group benchmark:** traditional vs adaptive DOE, with and without residual correction, compared under identical conditions.

## Done and next

- Done: package skeleton (v0.0), architecture and research-methodology documents, development roadmap.
- Next: v0.1 core data structures and Plackett-Burman screening.

## Links

See the GitHub repository for the full documentation and roadmap.
