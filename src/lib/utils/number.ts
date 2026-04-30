/**
 * Parses a base-10 integer from a string, returning a fallback value when the
 * input is absent or not a valid integer.
 *
 * Decimal strings are truncated toward zero (e.g. `"3.9"` → `3`). Any string
 * that cannot be parsed as a number (e.g. `"abc"`) also triggers the fallback.
 *
 * @param value - The string to parse, or `null`.
 * @param fallback - The value to return when `value` is `null`, empty, or non-numeric.
 * @returns The parsed integer, or `fallback` if parsing fails.
 *
 * @example
 * parseInteger('42', 0);    // 42
 * parseInteger('3.9', 0);   // 3  (truncated)
 * parseInteger('abc', 0);   // 0  (fallback)
 * parseInteger(null, 0);    // 0  (fallback)
 * parseInteger('', 0);      // 0  (fallback)
 */
export function parseInteger(value: string | null, fallback: number) {
    if (!value) return fallback;
    const parsed = Number.parseInt(value, 10);

    if (Number.isNaN(parsed)) return fallback;
    return parsed;
}
