import { isObject } from '../is/isObject'
import { isArray } from '../is/isArray'
import { get } from './get'

const Json_ref_regex = /(?:\$)?\.?(.+)\.{0,}/

const getFromJsonRef = (obj: { [key: string]: any }, ref: string) => {
	const regex_result = Json_ref_regex.exec(ref)
	if (regex_result === null) return null
	const path = get(regex_result, '1')
	return get(obj, path) || obj
}

/**
 * See u.decycle. Restores circuler refs to an object that has been decycled. 
 * 
 * @see decycle
 */
export const undecycle = (obj: { [key: string]: any } | any[]) => {
	const _undecycle = (_obj: { [key: string]: any }) => {
		for (let prop in _obj) {
			if (isObject(_obj[prop]) || isArray(_obj[prop])) {
				if (_obj[prop]['$ref']) {
					_obj[prop] = getFromJsonRef(obj, _obj[prop]['$ref'])
				} else {
					_obj[prop] = _undecycle(_obj[prop])
				}
			}
		}
		return _obj
	}
	return _undecycle(obj)
}