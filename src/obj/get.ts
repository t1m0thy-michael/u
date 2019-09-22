import { isString } from '../is/isString'

export interface Iget {
	/**
	 * Retrieve value from nested objects/arrays.
	 * 
	 * `keys` argument can be an array of strings/number or dot notation string.
	 * 
	 * Returns undefined if path does not exist.
	 * 
	 * ```js
	 * const myObj = {
	 * 	a: {
	 * 		b: ['Hello world'],
	 * 	}
	 * }
	 * 
	 * u.get(myObj 'a.b') // ['Hello world']
	 * u.get(myObj, ['a', 'b', 0]) // 'Hello world'
	 * u.get(myObj 'a.b.f') // undefined
	 * ```
	 */
	(obj: any, keys: string | string[]): any
}

 interface IgetInner {
	(obj: { [key: string]: any }, keys: string[], idx?: number): any
}


export const get:Iget = (obj, keys) => {

	if (isString(keys)) keys = keys.split('.')

	const _get:IgetInner = (obj, keys, idx = 0): any => {
		if (idx === keys.length - 1) return obj[keys[idx]]
		if (!keys[idx] || !obj[keys[idx]]) return undefined
		return _get(obj[keys[idx]], keys, ++idx)
	}

	return _get(obj, keys)
}