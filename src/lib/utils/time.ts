/**
 * Canonical string tokens for each supported time unit, ordered from largest
 * (weeks) to smallest (milliseconds).
 *
 * Use these constants as the `source` / `target` arguments to {@link convertTime}
 * instead of raw strings to avoid typos and benefit from type-checking.
 */
export const TimeUnits = {
    MILLISECONDS: 'ms',
    SECONDS: 's',
    MINUTES: 'min',
    HOURS: 'h',
    DAYS: 'd',
    WEEKS: 'w',
} as const;

type TimeUnit = (typeof TimeUnits)[keyof typeof TimeUnits];

const TimeUnitOrders = {
    [TimeUnits.MILLISECONDS]: 6,
    [TimeUnits.SECONDS]: 5,
    [TimeUnits.MINUTES]: 4,
    [TimeUnits.HOURS]: 3,
    [TimeUnits.DAYS]: 2,
    [TimeUnits.WEEKS]: 1,
};

function secondsToMilliseconds(seconds: number) {
    return seconds * 1000;
}

function minutesToSeconds(minutes: number) {
    return minutes * 60;
}

function hoursToMinutes(hours: number) {
    return hours * 60;
}

function daysToHours(days: number) {
    return days * 24;
}

function weeksToDays(weeks: number) {
    return weeks * 7;
}

/**
 * Converts a time value from one unit to another.
 *
 * Conversion only supports upward direction (larger → smaller), e.g. weeks →
 * days or hours → milliseconds. Attempting to convert in the downward direction
 * (e.g. milliseconds → seconds) throws an error because the result would not be
 * representable as a whole number in all cases.
 *
 * Both `source` and `target` default to `TimeUnits.MILLISECONDS`, so calling
 * `convertTime(n)` returns `n` unchanged.
 *
 * @param value - The numeric time value to convert.
 * @param source - The unit of the input value. Defaults to `'ms'`.
 * @param target - The unit of the output value. Defaults to `'ms'`.
 * @returns The converted time value as a number.
 * @throws {Error} When `source` is a smaller unit than `target`.
 *
 * @example
 * convertTime(1, TimeUnits.WEEKS, TimeUnits.DAYS);         // 7
 * convertTime(1, TimeUnits.HOURS, TimeUnits.MILLISECONDS); // 3_600_000
 * convertTime(1, TimeUnits.SECONDS, TimeUnits.MINUTES);    // throws
 */
export function convertTime(
    value: number,
    source: TimeUnit = TimeUnits.MILLISECONDS,
    target: TimeUnit = TimeUnits.MILLISECONDS,
) {
    const sourceOrder = TimeUnitOrders[source];
    const targetOrder = TimeUnitOrders[target];

    if (sourceOrder > targetOrder) {
        throw new Error(`source "${source}" can't be smaller than target "${target}"`);
    }
    switch (source) {
        case TimeUnits.WEEKS:
            if (target === TimeUnits.WEEKS) return value;
            return convertTime(weeksToDays(value), TimeUnits.DAYS, target);

        case TimeUnits.DAYS:
            if (target === TimeUnits.DAYS) return value;
            return convertTime(daysToHours(value), TimeUnits.HOURS, target);

        case TimeUnits.HOURS:
            if (target === TimeUnits.HOURS) return value;
            return convertTime(hoursToMinutes(value), TimeUnits.MINUTES, target);

        case TimeUnits.MINUTES:
            if (target === TimeUnits.MINUTES) return value;
            return convertTime(minutesToSeconds(value), TimeUnits.SECONDS, target);

        case TimeUnits.SECONDS:
            if (target === TimeUnits.SECONDS) return value;
            return convertTime(secondsToMilliseconds(value), TimeUnits.MILLISECONDS, target);

        case TimeUnits.MILLISECONDS:
        default:
            return value;
    }
}
