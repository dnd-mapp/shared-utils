# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Build configuration using **Vite** to bundle the library, enabling modern build tooling.

### Changed

- Updated prepublish-only script to use `.mjs` extension and added a run configuration.
- Added necessary dependencies for the Vite build process.

### Deprecated

- (n/a)

### Removed

- (n/a)

### Fixed

- (n/a)

### Security

- (n/a)

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
