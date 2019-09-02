import isString from './isString'
import isArray from './isArray'

const insert = (a: string | any[], pos: number, b: string | any[]) => {
	if (isString(a)) return [a.slice(0, pos), String(b), a.slice(pos)].join('')
	if (isArray(a)) return a.splice(pos, 0, b)
	throw new Error('You can only u.insert() into a string or an array')
}

export default insert