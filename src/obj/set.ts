import { isString } from '../is/isString'

export interface Iset {
	/**
	 * Set value in nested objects/arrays. 
	 * 
	 * Will create missing nested objects in order to set value at `keys` path.
	 *
	 * `keys` argument can be an array of strings/number or dot notation string.
	 *
	 * ```js
	 * const myObj = {}
	 *
	 * u.set(myObj 'a.b', 'hello world')
	 * // a: { b: 'Hello world' } }
	 * u.set(myObj, ['a', 'b'], 'hello world') // 'Hello world'
	 * // a: { b: 'Hello world' } }
	 * ```
	 */
	(obj: { [key: string]: any }, keys: string | string[], val: any): boolean
}

interface IsetInner {
	(obj: { [key: string]: any }, keys: string[], val: any, idx?: number): boolean
}

export const set:Iset = (obj, keys, val) => {

	if (isString(keys)) keys = keys.split('.')

	const _set:IsetInner = (obj, keys, val, idx = 0) => {
		let k = String(keys[idx])
		if (idx == keys.length - 1) return obj[k] = val
		if (typeof obj[k] === 'undefined') obj[k] = {}
		_set(obj[k], keys, val, ++idx)
		return true
	}

	return _set(obj, keys, val)
}