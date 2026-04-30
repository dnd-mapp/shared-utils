/** Represents a successful result containing the resolved value. */
interface Success<T> {
    data: T;
    error: null;
}

/** Represents a failed result containing the caught error. */
interface Failure<E = Error> {
    data: null;
    error: E;
}

/**
 * Discriminated union of {@link Success} and {@link Failure}.
 *
 * Narrow to the correct branch by checking `result.error === null` (success)
 * or `result.data === null` (failure).
 */
type Result<T, E = Error> = Success<T> | Failure<E>;

/**
 * Awaits a promise and returns a {@link Result} instead of throwing.
 *
 * On success the result's `data` field holds the resolved value and `error` is
 * `null`. On rejection, `data` is `null` and `error` holds the caught value.
 *
 * @param promise - The promise to await.
 * @returns A promise that always resolves to a `Result`.
 *
 * @example
 * const { data, error } = await tryCatch(fetch('/api/items'));
 * if (error) { ... }
 */
export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> {
    try {
        return { data: await promise, error: null };
    } catch (error) {
        return { data: null, error: error as E };
    }
}

/**
 * Calls a synchronous function and returns a {@link Result} instead of throwing.
 *
 * On success the result's `data` field holds the return value and `error` is
 * `null`. If the function throws, `data` is `null` and `error` holds the caught
 * value.
 *
 * @param fn - The zero-argument function to invoke.
 * @returns A `Result` wrapping the return value or the thrown error.
 *
 * @example
 * const { data, error } = tryCatchSync(() => JSON.parse(raw));
 * if (error) { ... }
 */
export function tryCatchSync<T, E = Error>(fn: () => T): Result<T, E> {
    try {
        return { data: fn(), error: null };
    } catch (error) {
        return { data: null, error: error as E };
    }
}
