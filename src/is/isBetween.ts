/**
 * Returns true is `val` is a between `a` and `b` (inclusive)
 */
export const isBetween = (a: number, b: number, val: any): boolean => (a <= val) && (val <= b)