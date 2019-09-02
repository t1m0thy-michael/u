import isString from './isString'
import isUndefined from './isUndefined'

const get = (obj: { [key: string]: any }, keys: string | string[] = []): any => {

	if (isString(keys)) keys = keys.split('.')

	const _get = (obj: { [key: string]: any }, keys: string[] = [], idx: number = 0): any => {
		if (isUndefined(obj)) return undefined
		if (idx === keys.length - 1) return obj[keys[idx]]
		if (!keys[idx] || !obj[keys[idx]]) return undefined
		return _get(obj[keys[idx]], keys, ++idx)
	}

	return _get(obj, keys)
}

export default get