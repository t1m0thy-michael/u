import { isType } from './isType'
/**
 * Returns `true` if `val` is an instance of, OR is typeof `type`. This means that objects
 * and primitives can be checked in the same way.
 * 
 * `type` can be passed as a string. Will return `false` if the `type` passed does not exist.
 * 
 * ```js 
 * (u.isInstanceOf('string', myVar)) // could be true,
 * (u.isInstanceOf('Node', myVar)) // could be true is Node is defined,
 * (u.isInstanceOf('UndefinedType', myVar) // false
 * ```
 */
export const isInstanceOf = (type: string, val: any): boolean => {
	try {
		return ((val instanceof eval(type)) || isType(type, val))
	} catch (e) {
		return false
	}
}