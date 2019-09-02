import isString from './isString'
import isArray from './isArray'

const remove = (a: string | any[], pos: number, len: number) => {
	if (isString(a)) return a.slice(0, pos) + a.slice(pos + len)
	if (isArray(a)) {
		a.splice(pos, len)
		return a
	}
	throw new Error('You can only u.remove() from a string or an array')
}

export default remove