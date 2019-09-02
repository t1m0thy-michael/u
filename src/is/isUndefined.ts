/**
 * Returns `true` if `val` is undefined, `false` otherwise.
 */
export const isUndefined = (val: any): val is undefined => (typeof val === 'undefined')