/**
 * Returns `true` if `val` is an async function, `false` otherwise.
 */
export const isFn = (obj: any): obj is Function => toString.apply(obj) === '[object Function]'