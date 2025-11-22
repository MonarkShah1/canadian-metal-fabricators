# Project Context: Canadian Metal Fabricators (CMF) Website Refresh

## 1. Business Overview
**Name:** Canadian Metal Fabricators (CMF)
**Positioning:** "Hybrid Supply Chain Partner" for major OEMs.
**Core Value Prop:** "Risk-Insured Hybrid Manufacturing."
   - **Mechanism:** Access to LCL (Lower Cost Location) pricing via ISO-certified partners (India) backed by CMF's ISO-certified domestic facility (GTA).
   - **Guarantee:** If global shipping/supply fails, local capacity takes over.
**Goal:** 5x impressions, shifting perception from local "job shop" to sophisticated supply chain partner.

## 2. Target Audience
**Primary User:** Senior Procurement Managers & Supply Chain Directors.
**Region:** Eastern Canada.
**Pain Points:** 
- Volatility/Quality risks of overseas sourcing.
- Unit cost pressure.
**Needs:** Lower unit costs *without* supply chain risk.

## 3. Technical Strategy
**Framework:** Astro (Static Site Generation for speed/SEO).
**Styling:** Tailwind CSS (Modern, utility-first).
**Architecture:** "Siloed" Structure using Astro Content Collections.
**Performance:** Critical for trust (Core Web Vitals).

## 4. SEO & Site Architecture (The Blueprint)
**Strategy:** Dominate "High-Intent" and "Local" search via semantic silos.

### A. The "Money" Silos (Commercial Intent)
- **`/services/`**: Core capability pages (e.g., `laser-cutting`, `cnc-bending`).
    - *Focus:* Tech specs, machine capacity, ISO standards.
- **`/industries/`**: Solution-based pages (e.g., `aerospace`, `medical`).
    - *Focus:* Industry compliance, specific pain points.

### B. The "Local" Weapon (Map Pack Dominance)
- **`/locations/`**: Programmatic landing pages (e.g., `toronto-sheet-metal`, `mississauga-laser-cutting`).
    - *Focus:* Hyper-local keywords + Embedded Map + "Near Me" signals.
    - *Canonical:* Strictly managed to avoid duplicate content issues.

### C. The "Knowledge" Silo (Authority)
- **`/blog/`**: Engineering-focused guides (e.g., "Fiber vs. CO2 Laser Cost Analysis").
    - *Goal:* Capture top-of-funnel traffic and build backlinks.

## 5. Capabilities & Services
**Strategy:** Hybrid Model (Global for volume, Domestic for speed/risk mitigation).
**Key Processes:** Fiber Laser Cutting, CNC Bending, Fabrication, Assembly.
**Trust Signals (Crucial):**
- **ISO 9001:2015:** End-to-end certification.
- **Stocking Programs:** Domestic warehousing for JIT delivery.
- **Rapid Prototyping:** Local speed for R&D/Validation.

## 6. Design & Vibe
**Aesthetic:** Modern, Tech-Forward, Transparent, Sophisticated.
**Anti-Pattern:** Do *not* look like a gritty local workshop.
**Design Source:** Figma.

## 7. Development Workflow
- **Master Doc:** `@docs/CONTEXT.md` (This file).
- **Updates:** Continuous updates as features are built.
