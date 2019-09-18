import { isArray } from '../is/isArray'
import { isArrayLike } from '../is/isArrayLike'
import { isIterable } from '../is/isIterable'
import { isString } from '../is/isString'
import { isUndefined } from '../is/isUndefined'

export interface ImakeSureItsAnArray {
	/**
	 * Will always return an array. 
	 * 
	 * Either the array passed as `arr` or a new array constructed from or containing the non-array value passed as `arr`.
	 */
	<T extends Element, U extends (NodeListOf<T>|HTMLCollectionOf<T>)> (arr: U): T[]
	<T, U extends (Iterator<T>)> (arr: U | (T | T[])): T[]
}
export const makeSureItsAnArray:ImakeSureItsAnArray = (arr:any) => {
	if (!isArray(arr)) {
		if (isUndefined(arr)) return []
		if (!isString(arr) && (isArrayLike(arr) || isIterable(arr))) {
			return Array.from(arr)
		} else {
			return [arr]
		}
	}
	return arr
}