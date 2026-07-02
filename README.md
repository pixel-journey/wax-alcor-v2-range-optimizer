# wax-alcor-v2-range-optimizer — Alcor v2 Range Optimizer

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Advanced Alcor v2 & Concentrated Liquidity Visualizers  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**An intelligent range suggestion engine for Alcor v2 that recommends optimal tick ranges based on historical volatility, volume profiles, and fee efficiency on WAX.**

---

## 1. Overview & Goal

This blueprint provides an AI-assisted (or rule-based) range recommendation system for Alcor v2 concentrated liquidity. It analyzes historical data to suggest ranges that balance capital efficiency, fee capture, and risk of impermanent loss.

**Why it matters for WAX/Antelope:**
Choosing the right range is one of the hardest parts of concentrated liquidity. This tool removes guesswork by giving data-driven suggestions tailored to each pool's behavior.

Uses exclusively **public infrastructure** (Alcor endpoints + historical data via Hyperion where available).

**Target users:** LP providers, yield farmers, portfolio managers, DeFi power users.

**Success metrics:**
- High-quality, explainable range suggestions
- Clear reasoning for each recommendation
- Good balance between simplicity and power

---

## 2. Concepts & Inspiration

**Core concepts:**
- Historical volatility and volume profile analysis
- Fee efficiency vs. range width trade-offs
- Impermanent loss risk scoring
- Backtesting of suggested ranges

**User pain points:**
Most users pick ranges arbitrarily or copy others. They need transparent, data-backed guidance.

**Inspirations:**
- Uniswap v3 range suggestion tools
- Professional quant analytics
- Explainable AI dashboards

**Related blueprints:** Pairs beautifully with `wax-alcor-v2-liquidity-density-heatmap`, `wax-concentrated-liquidity-roi-matrix`, `wax-lp-impermanent-loss-heat-map`, and `wax-alcor-v2-tick-cross-velocity`.

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Clean dashboard with "Recommended Ranges" cards
- Visual comparison of suggested vs. current/user ranges
- Clear explanations and confidence scores for each suggestion
- Interactive backtesting preview
- Responsive with excellent mobile experience

### 3.2 Key Views / Components
- `RangeSuggestionCards.tsx` — Top recommended ranges with metrics
- `RangeComparison.tsx` — Side-by-side visual comparison
- `BacktestPreview.tsx` — Simple historical performance simulation
- `PoolSelector.tsx` — Choose which pool to optimize for

### 3.3 Accessibility (A11y) & Inclusive Design
- WCAG 2.2 AA
- Clear textual explanations of recommendations
- Keyboard navigation
- Screen reader friendly

### 3.4 Performance & Optimization Targets
- Efficient historical data processing
- Client-side calculations where possible
- Fast suggestions

---

## 4. Technical Architecture

### 4.1 Core Tech Stack (Standardized)
- **Framework:** Next.js 15 (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS + shadcn/ui
- **State & Data:** @tanstack/react-query + zod
- **Blockchain Data:** Alcor public endpoints + Hyperion for historical volume/volatility
- **Visualization:** Recharts or custom components
- **Utilities:** date-fns, lucide-react, sonner

### 4.2 Data Flow Diagram
```
Alcor Pool Data + Historical Volume/Volatility
    ↓
Client-side Analysis Engine
    ↓
Rule-based or Simple ML Suggestion Logic
    ↓
React Query Cache
    ↓
Beautiful Suggestion Cards + Explanations
```

### 4.3 Folder Structure
Standard blueprint structure with components/suggestions, lib/wax/optimizer.ts, hooks/useRangeSuggestions.ts, etc.

### 4.4 Security & Privacy Notes
- Read-only public data
- Optional wallet for saving preferences
- Clear disclaimers that suggestions are not financial advice

---

## 5. Implementation Examples & Code Snippets

**Core suggestion logic example**
```ts
// lib/wax/optimizer.ts
export function generateRangeSuggestions(poolData: PoolData, historicalData: HistoricalData[]) {
  // Analyze volatility, volume profile, fee efficiency
  return rankedSuggestions;
}
```

---

## 6. Demo & Testing Strategy
- Live Demo with mock and mainnet data
- Strong test coverage for suggestion logic
- Playwright flows for suggestion → comparison journey
- Excellent educational tooltips

---

## 7. Roadmap & Development Phases
Follows the standard 4-phase template (Scaffold → Data Layer → Core UI → Polish & Release).

---

## 8. Visual References & Mockups
The interface should feel smart and trustworthy — like a quant tool but accessible. Clear cards with confidence scores and simple explanations.

---

## 9. Related Blueprints & Ecosystem Fit
- `wax-alcor-v2-liquidity-density-heatmap` — Visual context for suggestions
- `wax-concentrated-liquidity-roi-matrix` — Deep ROI analysis
- `wax-lp-impermanent-loss-heat-map` — Risk visualization

---

## 10. License, Contributing & Credits
- MIT License
- Built with public Alcor and Hyperion infrastructure
- Pixel Journey Design System

**Pixel Journey — Beautiful interfaces for public blockchain data.**
