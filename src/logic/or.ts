import { callOrReturn } from '../fn/callOrReturn'

export interface Ior {
	/** Accepts n values and/or functions as arguments. Returns true if one or more of them strictly equals `true` */
	(...args: (any | ((i?: number) => any))[]): boolean
}

export const or: Ior = (...args) => {
	for (let i = 0; i < args.length; i++) {
		if (callOrReturn(args[i])) {
			return true
		}
	}
	return false
}