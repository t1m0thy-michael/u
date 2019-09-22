/**
 * Returns `true` if `val` is an iterable
 */
export const isIterable = (val: any): boolean => (val != null && (typeof val[Symbol.iterator] === 'function'))