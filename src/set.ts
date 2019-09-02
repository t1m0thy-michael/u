import isString from './isString'

const set = (obj: { [key: string]: any }, keys: string | string[], val: any): boolean => {

	if (isString(keys)) keys = keys.split('.')

	const _set = (obj: { [key: string]: any }, keys: string[], val: any, idx: number = 0): boolean => {
		let k = String(keys[idx])
		if (idx == keys.length - 1) return obj[k] = val
		if (typeof obj[k] === 'undefined') obj[k] = {}
		_set(obj[k], keys, val, ++idx)
		return true
	}

	return _set(obj, keys, val)
}

export default set