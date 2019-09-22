/**
 * Returns `true` if `val` is an object, `false` otherwise.
 */
export const isObject = (obj: any): obj is ({ [index: string]: string }) => toString.apply(obj) === '[object Object]'