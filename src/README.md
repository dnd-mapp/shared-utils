# @dnd-mapp/shared-utils

[![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-utils)](https://www.npmjs.com/package/@dnd-mapp/shared-utils)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)
![Type: Module](https://img.shields.io/badge/Type-ESM-blue.svg)

The core utility library for the **D&D Mapp** platform. This package provides a centralized collection of TypeScript functions, constants, and business logic used across both frontend and backend services to ensure logic parity.

## 🏰 Overview

`@dnd-mapp/shared-utils` is a tree-shakable, pure TypeScript library containing the "brains" of the D&D Mapp ecosystem. It handles heavy lifting for:

- 🎲 **Dice Mechanics**: Standardized rolling logic and dice types.
- 📍 **Coordinate Calculations**: Shared math for map grids and positioning.
- 🏗 **Business Logic**: Consistent helpers for character stats and game rules.
- 📜 **Constants**: Centralized Enums and static data to prevent "magic strings."

---

## 🚀 Installation

Install the package via `pnpm` (recommended), `npm`, or `yarn`:

```bash
pnpm add @dnd-mapp/shared-utils
```

### Requirements

- **Node.js**: `~24.13` (or modern browser environments)
- **TypeScript**: `~5.9` (for full type-safety support)

---

## 📦 Usage

The library is exported as an **ES Module (ESM)**. You can import utilities or constants directly into your project:

```typescript
import { rollDice, DICE_TYPES, calculateDistance } from '@dnd-mapp/shared-utils';

// Perform a d20 roll
const roll = rollDice(DICE_TYPES.D20);
console.log(`Result: ${roll}`);

// Shared coordinate math
const distance = calculateDistance({ x: 0, y: 0 }, { x: 5, y: 5 });
```

### Side Effects

This package is marked as `sideEffects: false`, allowing for optimal tree-shaking in bundlers like Vite, Webpack, or Rollup. Only the code you actually import will be included in your final bundle.

---

## 🛠 Features

- **Type Safe**: Built with strict TypeScript for excellent IDE autocompletion.
- **Isomorphic**: Works seamlessly in Node.js 24+ and modern browsers.
- **Lightweight**: Minimal dependencies (only `tslib`).

---

## ⚖️ License

**Copyright © 2026 NoNamer777. All rights reserved.**

This software is **proprietary**. Unauthorized copying, modification, or distribution is strictly prohibited. Usage is restricted to authorized D&D Mapp applications and services.
