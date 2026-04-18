import { tryCatch, tryCatchSync } from './try-catch';

describe('tryCatch', () => {
    it('returns data and a null error when the promise resolves', async () => {
        const result = await tryCatch(Promise.resolve('ok'));
        expect(result).toEqual({ data: 'ok', error: null });
    });

    it('returns a null data and the error when the promise rejects', async () => {
        const error = new Error('boom');
        const result = await tryCatch(Promise.reject(error));
        expect(result).toEqual({ data: null, error });
    });
});

describe('tryCatchSync', () => {
    it('returns data and a null error when the function succeeds', () => {
        const result = tryCatchSync(() => 42);
        expect(result).toEqual({ data: 42, error: null });
    });

    it('returns a null data and the error when the function throws', () => {
        const error = new Error('sync boom');
        const result = tryCatchSync(() => {
            throw error;
        });
        expect(result).toEqual({ data: null, error });
    });
});
