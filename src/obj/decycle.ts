import { isObject } from '../is/isObject'
import { isArray } from '../is/isArray'

/**
 * Removes circular from `obj`. Circular refs are replaced with ref objects 
 * pointing to the first instance encountered:
 * 
 * ```js
 * { $ref: '$.obj.key.key.key'}
 * ```
 * 
 * `decycled` objects can be re-build using the imaginatively named `undecycle()`
 * 
 * ```js
 * const myObj = {}
 * myObj.a = myObj
 * JSON.stringify(u.decycle(myObj))
 * ```
 */
export const decycle = (obj: { [key: string]: any }) => {

	const objs: any[] = []
	const paths: { $ref: string }[] = []

	const _decycle = (obj: { [key: string]: any }, path = '$'): { [key: string]: any } => {

		if (isObject(obj) || isArray(obj)) {
			for (let i = 0; i < objs.length; i++) {
				if (obj === objs[i]) return paths[i]
			}
			objs.push(obj)
			paths.push({ $ref: path })
		}

		const rtn: { [key: string]: any } = isObject(obj) ? {} : []

		for (let prop in obj) {
			if (isObject(obj[prop]) || isArray(obj[prop])) {
				rtn[prop] = _decycle(obj[prop], `${path}.${prop}`)
			} else {
				rtn[prop] = obj[prop]
			}
		}
		return isArray(rtn) ? rtn.sort() : rtn
	}
	return _decycle(obj)
}