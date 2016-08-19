export function Identificable(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function Id(idName?: string) {
    return undefined;
}