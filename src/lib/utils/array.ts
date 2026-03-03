export function fromStringToArray(value: string | null) {
    if (!value) return null;
    return value.split(',');
}

export function isArrayEmpty(array: unknown[]) {
    return array.length === 0;
}
