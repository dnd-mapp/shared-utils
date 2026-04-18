import { parseInteger } from './number';

describe('parseInteger', () => {
    it('returns the fallback when value is null', () => {
        expect(parseInteger(null, 99)).toBe(99);
    });

    it('returns the fallback when value is an empty string', () => {
        expect(parseInteger('', 99)).toBe(99);
    });

    it('parses a valid integer string', () => {
        expect(parseInteger('42', 99)).toBe(42);
    });

    it('truncates a decimal string to an integer', () => {
        expect(parseInteger('3.9', 99)).toBe(3);
    });

    it('returns the fallback for a non-numeric string', () => {
        expect(parseInteger('abc', 99)).toBe(99);
    });

    it('parses a negative integer string', () => {
        expect(parseInteger('-7', 99)).toBe(-7);
    });
});
