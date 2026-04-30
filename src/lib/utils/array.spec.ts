import { isArrayEmpty, parseArrayFromString } from './array';

describe('isArrayEmpty', () => {
    it('returns true for an empty array', () => {
        expect(isArrayEmpty([])).toBe(true);
    });

    it('returns false for a non-empty array', () => {
        expect(isArrayEmpty([1])).toBe(false);
    });
});

describe('parseArrayFromString', () => {
    it('returns the fallback when value is undefined', () => {
        const fallback = ['x', 'y'];
        expect(parseArrayFromString(fallback)).toBe(fallback);
    });

    it('returns the fallback when value is an empty string', () => {
        const fallback = ['x', 'y'];
        expect(parseArrayFromString(fallback, '')).toBe(fallback);
    });

    it('returns a parsed array from the value string, ignoring the fallback', () => {
        expect(parseArrayFromString(['x', 'y'], 'a,b')).toEqual(['a', 'b']);
    });
});
