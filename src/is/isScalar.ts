/**
 * Returns `true` if `val` is a scalar value (Bool, Number or String), `false` otherwise.
 */
export const isScalar = (val: any): val is boolean | string | number => ['boolean', 'number', 'string'].includes(typeof val)