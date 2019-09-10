import { isFunction } from '../is/isFunction'
/**
 * If `fn` is a function, call it with `...args`, otherwise return it
 * 
 * ```js
 * const example1 = (name) => `Hello ${name}`
 * const example2 = 'Whatever...'
 * 
 * u.fn.callOrReturn(example1, 'Tim') // 'Hello Tim
 * u.fn.callOrReturn(example2, pointlessArg) // Whatever...
 */
export function callOrReturn <T>(val: T): T
export function callOrReturn<T>(fn: (...args: any) => T, ...args: any[]): T 
export function callOrReturn <T>(fn: (...args: any) => T, ...args: any[]): T {
	return isFunction(fn) ? fn(...args) : fn
}