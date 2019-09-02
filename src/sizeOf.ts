import isObject from './isObject'
import isString from './isString'

const set = (obj: { [key: string]: any }, keys: string | string[] | { $ref: string }, val: any): boolean => {

	if (isObject(keys)) {
		if (keys.$ref && keys.$ref.substring(0, 2) === '$.') {
			keys = keys.$ref.substring(2)
		} else {
			throw new Error('set(): invalid KEYS object')
		}
	}

	if (isString(keys)) keys = keys.split('.')

	const _set = (obj: { [key: string]: any }, keys: string[], val: any, idx: number = 0): boolean => {
		let k = String(keys[idx])
		let isArr = false
		if (idx == keys.length - 1) return obj[k] = val // ...and we're done
		// is key like '[key]'? Indicates that, if note already set, value is intended to be an array
		if (k[0] === '[' && k[k.length - 1] === ']') {
			k = k.substring(1, k.length - 1)
			isArr = true
		}
		if (typeof obj[k] === 'undefined') {
			if (isArr) {
				obj[k] = []
			} else {
				obj[k] = {}
			}
		}
		_set(obj[k], keys, val, ++idx) // recursion is cool
		return true
	}

	return _set(obj, keys, val)
}
export default set