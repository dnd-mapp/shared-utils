# @dnd-mapp/shared-utils

![CI Status](https://github.com/dnd-mapp/shared-utils/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-utils)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

The core utility library for the D&D Mapp platform. This package provides a collection of shared TypeScript functions, constants, and business logic helpers used across the entire D&D Mapp ecosystem.

## 🏰 Overview

`@dnd-mapp/shared-utils` is a pure TypeScript library designed to ensure logic consistency between frontend and backend services. It contains the "brains" of the platform—handling dice mechanics, coordinate calculations, and shared data constants.

- **Runtime**: Node.js v24+ / Browser compatible.
- **Language**: TypeScript.
- **Package Management**: pnpm with `mise-en-place`.

---

## 🚀 Getting Started

### Prerequisites

This project uses [mise-en-place](https://mise.jdx.dev/) to manage runtime versions.

1. **Install Mise** to automatically manage:
  - **Node.js**: v24.13.1
  - **pnpm**: v10.29.3

### Local Setup

1.  **Clone and Install**:

    ```bash
    git clone https://github.com/dnd-mapp/shared-utils.git
    cd shared-utils
    mise install
    pnpm install
    ```

---

## 📦 Usage

### Installation

To use these utilities in a D&D Mapp application or service, install it via pnpm:

```bash
pnpm add @dnd-mapp/shared-utils
```

### Integration

Import constants or utility functions directly into your TypeScript files:

```typescript
import { rollDice, DICE_TYPES } from '@dnd-mapp/shared-utils';

// Example usage
const result = rollDice(DICE_TYPES.D20);
console.log(`You rolled a: ${result}`);
```

---

## 🛠 Project Structure

The repository follows a standard TypeScript library layout:

```text
shared-utils/
├── src/
│   ├── lib/
│   │   ├── constants/      # Shared enums and static data
│   │   ├── utils/          # Pure helper functions
│   │   └── types/          # Shared TypeScript interfaces/types
│   └── index.ts            # Primary entry point (Public API)
├── .tool-versions          # Mise version config
├── package.json
└── tsconfig.json           # TypeScript configuration
```

---

## 📜 Scripts

- `pnpm build`: Compiles the TypeScript source into the `dist/` directory.
- `pnpm lint`: Runs ESLint to ensure code quality.
- `pnpm format:write`: Formats the codebase using Prettier.

---

## ⚖️ License

Copyright © 2026 NoNamer777. All rights reserved.

This software is proprietary. Unauthorized copying, modification, or distribution is strictly prohibited. Use is subject to the terms in the [LICENSE](LICENSE) file.
