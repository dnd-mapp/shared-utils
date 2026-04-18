import { fromStringToArray, isArrayEmpty, parseArrayFromString } from './array';

describe('fromStringToArray', () => {
    it('returns null when value is null', () => {
        expect(fromStringToArray(null)).toBeNull();
    });

    it('returns null when value is an empty string', () => {
        expect(fromStringToArray('')).toBeNull();
    });

    it('returns a single-element array for a string without commas', () => {
        expect(fromStringToArray('hello')).toEqual(['hello']);
    });

    it('splits a comma-separated string into an array', () => {
        expect(fromStringToArray('a,b,c')).toEqual(['a', 'b', 'c']);
    });
});

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
