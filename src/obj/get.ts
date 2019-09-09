import { isString } from '../is/isString'
import { isUndefined } from '../is/isUndefined'

/**
 * Retrieve value from nested objects/arrays.
 * 
 * `keys` argument can be an array of strings/number or dot notation string.
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
export const get = (obj: { [key: string]: any }, keys: string | string[] = []): any => {

	if (isString(keys)) keys = keys.split('.')

	const _get = (obj: { [key: string]: any }, keys: string[] = [], idx: number = 0): any => {
		if (isUndefined(obj)) return undefined
		if (idx === keys.length - 1) return obj[keys[idx]]
		if (!keys[idx] || !obj[keys[idx]]) return undefined
		return _get(obj[keys[idx]], keys, ++idx)
	}

	return _get(obj, keys)
}