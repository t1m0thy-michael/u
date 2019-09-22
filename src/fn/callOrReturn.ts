import { isFunction } from '../is/isFunction'

export interface IcallOrReturn {
	/** If `fn` is a function, call it passing `...args` and return result. Otherwise return `fn` */
	<T, U>(fn: U | ((...args: T[]) => U), ...args: T[]): U
}

export const callOrReturn: IcallOrReturn = (fn, ...args) => isFunction(fn) ? fn(...args) : fn