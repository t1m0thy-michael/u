import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isIterable from './isIterable'
import isString from './isString'
import isUndefined from './isUndefined'

interface ImakeSureItsAnArray {
	(arr: NodeListOf<Element>): Element[] // TS doesn't figure this out even though NodeLists are array like
	<T>(arr: T[]): T[]
	<T>(arr: T): T[]
}
const makeSureItsAnArray: ImakeSureItsAnArray = (arr: any): any[] => {
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

export default makeSureItsAnArray