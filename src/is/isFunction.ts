/**
 * Returns `true` if `val` is a function value, `false` otherwise.
 */
export const isFunction = (obj: any): obj is Function => toString.apply(obj) === '[object Function]'