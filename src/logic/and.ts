import { callOrReturn } from '../fn/callOrReturn'

/**
 * Accepts `arr` array of values/function. 
 * 
 * Returns true if all of them strictly equal `true`
 */
export function and(arr: (boolean | (() => boolean))[]): boolean {
	let t = 0
	for (let i = 0; i < arr.length; i++) {
		if (callOrReturn(arr[i])) {
			t++
		}
	}
	return t === arr.length
}