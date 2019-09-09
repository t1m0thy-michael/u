/**
 * Returns `true` if `val` is typeof number (but not NaN).
 */
export const isNumber = (val: any): val is number => (typeof val === 'number' && !isNaN(val))