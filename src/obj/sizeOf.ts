import { isObject } from '../is/isObject'
import { isLength } from '../is/isLength'
import { isMap } from '../is/isMap'

export interface IsizeOf {
	/**
	 * Returns length/size of array/object/map/string, otherwise 0
	 * 
	 * ```js
	 * u.sizeOf([0,1,2,3,4]) // 5
	 * u.sizeOf({a: 0, b: 1, c: 2}) // 3 
	 * ```
	 */
	(obj: any): number
}

export const sizeOf: IsizeOf = (obj) => {
	if (obj) {
		if (isLength(obj.length)) return obj.length
		if (isMap(obj)) return obj.size
		if (isObject(obj)) return Object.keys(obj).length
	}
	return 0
}