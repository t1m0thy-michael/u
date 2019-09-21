import { callOrReturn } from '../fn/callOrReturn'

export interface Itimes {
	/**
	 * Creates an array of length `len` containing `val` at each index.
	 * 
	 * If `val` is a function the new array will contain its return values. The function will get the index as it's only argument
	 */
	<T>(val: ((i: number) => T) | T, len: number): T[]
}

export const times:Itimes = (val, len) => {
	const out = []
	for (let i = 0; i < len; i++) {
		out[i] = callOrReturn(val, i)
	}
	return out
}