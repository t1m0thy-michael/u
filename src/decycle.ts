import isObject from './isObject'
import isArray from './isArray'

const decycle = (obj: { [key: string]: any }) => {

	const objs: any[] = []
	const paths: { $ref: string }[] = []

	const _decycle = (obj: { [key: string]: any }, path = '$') => {

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

export default decycle