/**
 * Returns `true` if `val` can be coerced into a number, `false` otherwise.
 */
export const isNumberish = (val: any): boolean => (!isNaN(val))