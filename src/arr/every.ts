import { makeSureItsAnArray } from '../makeSureItsAnArray'

/**
 * Calls `fn` on each element of `arr`.
 * 
 * Returns `true` if `fn` returns true for every element in `arr`, otherwiase `false`
 *
 * ```js
 * const testFn = (a) => a >= 10
 * u.every(testFn, [10, 11, 12, 13]) // true
 * u.every(testFn, [9, 10, 11, 12]) // false
 * ```
 *
 * `fn` is the first param in order to make `every()` usefully curryable.
 */
export const every = (fn: (...args: any[]) => any, arr: any): boolean => makeSureItsAnArray(arr).every(fn)