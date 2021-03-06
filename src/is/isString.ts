/**
 * Returns `true` if `val` is a string, `false` otherwise.
 */
export const isString = (val: any): val is string => (typeof val === 'string')