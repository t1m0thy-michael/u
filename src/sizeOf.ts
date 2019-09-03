import isObject from './isObject'

const sizeOf = (obj: { [key: string]: any }): number => {
	if (typeof obj.length !== 'undefined') return obj.length
	if (obj instanceof Map) return obj.size
	if (isObject(obj)) return Object.keys(obj).length
	return 0
}

export default sizeOf