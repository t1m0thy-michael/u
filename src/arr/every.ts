import { makeSureItsAnArray } from '../util/makeSureItsAnArray'

export interface Ievery{
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
	(fn: (...args: any[]) => any, arr: any): boolean
}

export const every: Ievery = (fn, arr) => {
	arr = makeSureItsAnArray(arr)
	for (let i = 0; i < arr.length; i++) {
		if (!fn(arr[i])){
			return false
		}
	}
	return true
}