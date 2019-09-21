import { isFunction } from '../is/isFunction'

export interface ImaybeCall {
	/**
	 * If `fn` is a function, call it with `...args`, otherwise return it
	 * 
	 * ```js
	 * const example1 = (name) => `Hello ${name}`
	 * const example2 = 'Whatever...'
	 * 
	 * u.fn.maybeCall(example1, 'Tim') // 'Hello Tim
	 * u.fn.maybeCall(example2, pointlessArg) // false
	 */
	(fn: any, ...args: any[]): any
}

export const maybeCall:ImaybeCall = (fn, ...args) => 
	isFunction(fn) ? fn(...args) : false