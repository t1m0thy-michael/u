import { isArray } from '../is/isArray'
import { isArrayLike } from '../is/isArrayLike'
import { isIterable } from '../is/isIterable'
import { isString } from '../is/isString'
import { isUndefined } from '../is/isUndefined'

const GENERATOR_TAGS = [
	'[object AsyncGeneratorFunction]',
	'[object GeneratorFunction]',
]

export interface ImakeSureItsAnArray {
	/**
	 * Will always return an array. Either the array passed as `arr` or a new array constructed from or containing the non-array value.
	 * Generator (including async generators) functions will always return an empty array unless `allowGenerator` is true.
	 */
	<T>(arr: (T | T[])): T[]
	<T, U extends (Iterable<T>)>(arr: U): T[]
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