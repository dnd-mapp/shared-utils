import { TimeUnits, convertTime } from './time';

describe('TimeUnits', () => {
    it('has the correct value for MILLISECONDS', () => {
        expect(TimeUnits.MILLISECONDS).toBe('ms');
    });

    it('has the correct value for SECONDS', () => {
        expect(TimeUnits.SECONDS).toBe('s');
    });

    it('has the correct value for MINUTES', () => {
        expect(TimeUnits.MINUTES).toBe('min');
    });

    it('has the correct value for HOURS', () => {
        expect(TimeUnits.HOURS).toBe('h');
    });

    it('has the correct value for DAYS', () => {
        expect(TimeUnits.DAYS).toBe('d');
    });

    it('has the correct value for WEEKS', () => {
        expect(TimeUnits.WEEKS).toBe('w');
    });
});

describe('convertTime', () => {
    describe('same-unit conversions return the value unchanged', () => {
        it('milliseconds → milliseconds', () => {
            expect(convertTime(5, TimeUnits.MILLISECONDS, TimeUnits.MILLISECONDS)).toBe(5);
        });

        it('seconds → seconds', () => {
            expect(convertTime(5, TimeUnits.SECONDS, TimeUnits.SECONDS)).toBe(5);
        });

        it('minutes → minutes', () => {
            expect(convertTime(5, TimeUnits.MINUTES, TimeUnits.MINUTES)).toBe(5);
        });

        it('hours → hours', () => {
            expect(convertTime(5, TimeUnits.HOURS, TimeUnits.HOURS)).toBe(5);
        });

        it('days → days', () => {
            expect(convertTime(5, TimeUnits.DAYS, TimeUnits.DAYS)).toBe(5);
        });

        it('weeks → weeks', () => {
            expect(convertTime(5, TimeUnits.WEEKS, TimeUnits.WEEKS)).toBe(5);
        });
    });

    describe('cross-unit conversions from weeks', () => {
        it('1 week → 7 days', () => {
            expect(convertTime(1, TimeUnits.WEEKS, TimeUnits.DAYS)).toBe(7);
        });

        it('1 week → 168 hours', () => {
            expect(convertTime(1, TimeUnits.WEEKS, TimeUnits.HOURS)).toBe(168);
        });

        it('1 week → 10080 minutes', () => {
            expect(convertTime(1, TimeUnits.WEEKS, TimeUnits.MINUTES)).toBe(10_080);
        });

        it('1 week → 604800 seconds', () => {
            expect(convertTime(1, TimeUnits.WEEKS, TimeUnits.SECONDS)).toBe(604_800);
        });

        it('1 week → 604800000 milliseconds', () => {
            expect(convertTime(1, TimeUnits.WEEKS, TimeUnits.MILLISECONDS)).toBe(604_800_000);
        });
    });

    describe('cross-unit conversions from days', () => {
        it('1 day → 24 hours', () => {
            expect(convertTime(1, TimeUnits.DAYS, TimeUnits.HOURS)).toBe(24);
        });

        it('1 day → 1440 minutes', () => {
            expect(convertTime(1, TimeUnits.DAYS, TimeUnits.MINUTES)).toBe(1_440);
        });

        it('1 day → 86400 seconds', () => {
            expect(convertTime(1, TimeUnits.DAYS, TimeUnits.SECONDS)).toBe(86_400);
        });

        it('1 day → 86400000 milliseconds', () => {
            expect(convertTime(1, TimeUnits.DAYS, TimeUnits.MILLISECONDS)).toBe(86_400_000);
        });
    });

    describe('cross-unit conversions from hours', () => {
        it('1 hour → 60 minutes', () => {
            expect(convertTime(1, TimeUnits.HOURS, TimeUnits.MINUTES)).toBe(60);
        });

        it('1 hour → 3600 seconds', () => {
            expect(convertTime(1, TimeUnits.HOURS, TimeUnits.SECONDS)).toBe(3_600);
        });

        it('1 hour → 3600000 milliseconds', () => {
            expect(convertTime(1, TimeUnits.HOURS, TimeUnits.MILLISECONDS)).toBe(3_600_000);
        });
    });

    describe('cross-unit conversions from minutes', () => {
        it('1 minute → 60 seconds', () => {
            expect(convertTime(1, TimeUnits.MINUTES, TimeUnits.SECONDS)).toBe(60);
        });

        it('1 minute → 60000 milliseconds', () => {
            expect(convertTime(1, TimeUnits.MINUTES, TimeUnits.MILLISECONDS)).toBe(60_000);
        });
    });

    describe('cross-unit conversions from seconds', () => {
        it('1 second → 1000 milliseconds', () => {
            expect(convertTime(1, TimeUnits.SECONDS, TimeUnits.MILLISECONDS)).toBe(1_000);
        });
    });

    describe('default parameters', () => {
        it('returns the value as-is when no source/target are provided (ms → ms)', () => {
            expect(convertTime(42)).toBe(42);
        });
    });

    describe('error cases', () => {
        it('throws when source unit is smaller than target unit', () => {
            expect(() => convertTime(1, TimeUnits.MILLISECONDS, TimeUnits.SECONDS)).toThrow(Error);
        });
    });
});
