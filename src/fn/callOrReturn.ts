import { isFunction } from '../is/isFunction'

export interface IcallOrReturn {
	<T, U>(fn: U | ((...args: T[]) => U), ...args: T[]): U
}

export const callOrReturn: IcallOrReturn = (fn: any, ...args: any[]) => isFunction(fn) ? fn(...args) : fn