import { callOrReturn } from '../fn/callOrReturn'

export interface Iand {
	/** Accepts n values and/or functions as arguments. Returns true if all of them strictly equal `true` */
	(...args: (any | ((i?: number) => any))[]): boolean
}

export const and: Iand = (...args) => {
	let t = 0
	for (let i = 0; i < args.length; i++) {
		if (callOrReturn(args[i])) {
			t++
		}
	}
	return t === args.length
}