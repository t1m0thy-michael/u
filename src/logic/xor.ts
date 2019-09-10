import { callOrReturn } from '../fn/callOrReturn'

/**
 * Accepts `arr` array of values/function. 
 * 
 * Returns true if only one of them strictly equals TRUE
 */
export function xor(arr: (boolean | (() => boolean))[]): boolean {
	let t = 0
	for (let i = 0; i < arr.length; i++) {
		if (callOrReturn(arr[i])) {
			t++
		}
	}
	return t === 1
}