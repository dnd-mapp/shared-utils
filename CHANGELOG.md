# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Time utility `convertTime` with `TimeUnits` constants for converting between milliseconds, seconds, minutes, hours, days, and weeks.
- Array utility `parseArrayFromString` to split a comma-separated string into an array, with a fallback for empty/missing values.
- Vitest testing infrastructure with V8 coverage reporting, HTML report generation, and 80% coverage thresholds.
- Unit tests for all utility modules: `array`, `number`, `time`, and `try-catch` — achieving 100% statement, branch, function, and line coverage.
- Test development script (`test:development`) for interactive Vitest UI.
- ESLint extraction script (`lint:eslint`) for linting command alias.

### Changed

- Node.js engine requirement bumped from `~24.14` to `~24.15`.
- Package manager version updated from `pnpm@10.30.3` to `pnpm@10.33.0`.
- Updated all dev dependency versions to their latest patch releases.
- `package.json` engines changed from `">=24.14.0"` to `"~24.15"` with devEngines runtime constraint.
- `.npmrc` now enforces engine-strict mode.

### Fixed

- ESLint config now correctly ignores the `coverage/` and `reports/` output directories.

### Removed

- `docs/release-notes-template.md` — moved to `docs/` under shared repository.

### Deprecated

- (n/a)

### Security

- (n/a)

---

## [1.2.0] - 2026-03-08

### Added

- Build configuration using **Vite** to bundle the library, enabling modern build tooling.

### Changed

- Updated prepublish-only script to use `.mjs` extension and added a run configuration.
- Added necessary dependencies for the Vite build process.

---

## [1.1.0] - 2026-03-03

### Added

- Array utility function `fromStringToArray` to convert comma-separated strings into arrays.
- Array utility function `isArrayEmpty` to check if an array is empty.
- Number utility function `parseInteger` to parse integer values with a fallback value.

### Changed

- Enable strict null checks in TypeScript configuration for improved type safety.

---

## [1.0.0] - 2026-02-19

### Added

- Util function wrapping a try/catch block to return the result and error as values.

---
