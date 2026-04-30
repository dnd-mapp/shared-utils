/**
 * Determines whether the given array contains no elements.
 *
 * @param array - The array to check.
 * @returns `true` if the array is empty, `false` otherwise.
 *
 * @example
 * isArrayEmpty([]);      // true
 * isArrayEmpty([1, 2]); // false
 */
export function isArrayEmpty(array: unknown[]) {
    return array.length === 0;
}

/**
 * Parses a comma-separated string into an array of strings.
 *
 * Returns the `fallback` array when `value` is `undefined` or an empty string,
 * so callers always receive a valid array regardless of the input.
 *
 * @param fallback - The array to return when `value` is absent or empty.
 * @param value - An optional comma-separated string to parse.
 * @returns The parsed string array, or `fallback` if `value` is not provided.
 *
 * @example
 * parseArrayFromString(['a', 'b']);          // ['a', 'b']  (fallback)
 * parseArrayFromString(['a', 'b'], '');      // ['a', 'b']  (fallback)
 * parseArrayFromString(['a', 'b'], 'x,y,z'); // ['x', 'y', 'z']
 */
export function parseArrayFromString(fallback: string[], value?: string) {
    if (!value) return fallback;
    return value.split(',');
}
