import { callOrReturn } from '../fn/callOrReturn'

export interface Ixor {
	/** Accepts n values and/or functions as arguments. Returns true if one or more of them strictly equals `true` */
	(...args: (any | ((i?: number) => any))[]): boolean
}

export const xor: Ixor = (...args) => {
	let t = 0
	for (let i = 0; i < args.length; i++) {
		if (callOrReturn(args[i])) {
			t++
		}
	}
	return t === 1
}