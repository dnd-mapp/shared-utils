# Contributing to @dnd-mapp/shared-utils

Thank you for contributing to the core logic of the **D&D Mapp** platform! As this library ensures consistency across our entire ecosystem, we maintain strict standards for type safety and environment parity.

Please follow these guidelines to maintain the integrity of our shared utilities.

---

## 🛠 Development Environment

To ensure environment parity across all developer machines, we use [mise-en-place](https://mise.jdx.dev/) to manage Node.js and pnpm versions.

1. **Initialize Environment**:

    ```bash
    mise trust
    mise install
    ```

2. **Install Dependencies**: Always use `pnpm`. Do not use `npm` or `yarn`, as they will generate incompatible lockfiles.

    ```bash
    pnpm install
    ```

---

## 🌿 Branching Strategy

We follow a feature-branch workflow. Please create branches from `main`:

- `feature/description`: For new utilities (e.g., `feature/dice-notation-parser`).
- `bugfix/description`: For fixing logic errors (e.g., `bugfix/grid-offset-calc`).
- `chore/description`: For maintenance (e.g., `chore/update-typescript-5.9`).

---

## 📝 Commit Message Convention

We enforce [Conventional Commits](https://www.conventionalcommits.org/) to automate versioning. Your commit messages should follow this pattern:

`<type>[optional scope]: <description>`

**Common Types:**
- `feat`: A new utility or constant.
- `fix`: A bug fix in existing logic.
- `docs`: Documentation changes.
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `perf`: Changes that improve execution speed of utilities.
- `test`: Adding or correcting tests.
- `chore`: Updating build tasks or package manager configs.

*Example: `feat(dice): add support for advantage/disadvantage rolls`*

---

## 🎨 Coding Standards

### Linting & Formatting

This project uses **ESLint** for code quality and **Prettier** for consistency. Your code must pass these checks before a PR can be merged:

```bash
# Check for logic and typing errors
pnpm lint

# Check if code follows formatting rules
pnpm format:check

# Automatically fix formatting issues
pnpm format:write
```

### TypeScript Best Practices

- **Strict Typing**: We use TypeScript `~5.9` in strict mode. **Avoid `any`**; use `unknown` or specific interfaces instead.
- **Pure Functions**: Utilities in `src/lib/utils/` should be side-effect free and deterministic.
- **Tree-shaking**: Ensure all exports are clean to maintain the `sideEffects: false` status of the package.
- **Internal vs Public**: Only export stable APIs through `src/index.ts`. Internal helpers should remain in their respective subfolders.

---

## 🚀 Pull Request Process

1. **Sync**: Ensure your branch is rebased on the latest `main`.
2. **Build**: Run `pnpm build` locally to ensure your changes don't break the TypeScript compilation.
3. **Submit**: Create a PR with a clear description of the logic being added or fixed.
4. **Review**: At least one code review is required. Address comments by pushing updates to the same branch.

---

## ⚖️ Legal Note

By contributing to **@dnd-mapp/shared-utils**, you agree that your contributions will be licensed under the proprietary terms defined in the project's [LICENSE](LICENSE) file. All rights remain reserved by **NoNamer777**.
