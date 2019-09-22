import { isObject } from '../is/isObject'
import { isArray } from '../is/isArray'

export interface Idecycle {
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
	 *  ```
	 */
	(obj: { [key: string]: any }): { [key: string]: any }
}

interface IdecycleInner {
	(obj: { [key: string]: any }, path?: string): { [key: string]: any }
}
export const decycle:Idecycle = (obj) => {

	const objs: any[] = []
	const paths: { $ref: string }[] = []

	const _decycle:IdecycleInner = (obj: { [key: string]: any }, path:string = '$'): { [key: string]: any } => {

		if (isObject(obj) || isArray(obj)) {
			for (let i = 0; i < objs.length; i++) {
				if (obj === objs[i]) return paths[i]
			}
			objs.push(obj)
			paths.push({ $ref: path })
		}

		//const obj: { [key: string]: any } = isObject(obj) ? {} : []

		for (let prop in obj) {
			if (isObject(obj[prop]) || isArray(obj[prop])) {
				obj[prop] = _decycle(obj[prop], `${path}.${prop}`)
			}
		}
		return isArray(obj) ? obj.sort() : obj
	}
	return _decycle(obj)
}