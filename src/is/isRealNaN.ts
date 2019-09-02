/**
 * Returns `true` if `val` === NaN (without coercion), `false` otherwise.
 */
export const isRealNaN = (val: any): boolean => (typeof val === 'number' && isNaN(val))