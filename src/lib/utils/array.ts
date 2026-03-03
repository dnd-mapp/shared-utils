export function fromStringToArray(value: string | null) {
    if (!value) return null;
    return value.split(',');
}

export function isArrayEmpty<T>(array: T[]) {
    return array.length === 0;
}
