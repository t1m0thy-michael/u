/**
 * Returns `true` if `val` is a function value, `false` otherwise.
 */
export const isFunction = (obj: any): obj is Function => typeof obj === 'function'