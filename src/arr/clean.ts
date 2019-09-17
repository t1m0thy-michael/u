import { isFunction } from '../is/isFunction'
import { isRealNaN } from '../is/isRealNaN'

export interface Iclean {
	/**
	 * Returns a new array without values matching `deleteValue` or, if deleteValue is a function, without values for which it returned true.
	 *
	 * `deleteValue` is the first param in order to make `clean()` usefully curryable.
	 *
	 * ```js
	 * const myArray = [1, 2, 'text', null, undefined]
	 * let cleanedArray = await u.clean(undefined, myArray) // [1, 2, 'text', null]
	 * ```
	 */
	(
		deleteValue: ((val: any) => boolean) | any,
		arr: any[]
	): any[]
}
export const clean:Iclean = (deleteValue, arr) => {

	if (!isFunction(deleteValue)) {
		return arr.filter((val) => {
			if (isRealNaN(deleteValue) && isRealNaN(val)) return false
			return val !== deleteValue
		})
	}
	return arr.filter((val) => !deleteValue(val))
}