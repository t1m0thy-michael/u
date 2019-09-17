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
	 * Generator (including async) functions will always return an empty array unless `allowGenerator` is true.
	 */
	(arr: NodeListOf<Element>): Element[] // TS doesn't figure this out even though NodeLists are array like
	/**
	 * Will always return an array. Either the array passed as `arr` or a new array constructed from or containing the non-array value.
	 * Generator (including async) functions will always return an empty array unless `allowGenerator` is true.
	 */
	<T>(arr: T[]): T[]
	/**
	 * Will always return an array. Either the array passed as `arr` or a new array constructed from or containing the non-array value.
	 * Generator (including async generators) functions will always return an empty array unless `allowGenerator` is true.
	 */
	<T>(arr: T): T[]
}
export const makeSureItsAnArray: ImakeSureItsAnArray = (arr: any, allowGenerator: boolean = false): any[] => {
	if (!allowGenerator && GENERATOR_TAGS.includes(toString.apply(arr))) return []
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