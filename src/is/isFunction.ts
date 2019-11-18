import { isAsyncFn } from './isAsyncFn'
import { isFn } from './isFn'
/**
 * Returns `true` if `val` is a function value, `false` otherwise.
 */
export const isFunction = (obj: any): obj is Function => isAsyncFn(obj) || isFn(obj)