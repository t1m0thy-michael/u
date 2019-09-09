/**
 * Returns `true` if `val` is a boolean value, `false` otherwise.
 */
export const isBool = (val: any): val is boolean => typeof val === 'boolean'