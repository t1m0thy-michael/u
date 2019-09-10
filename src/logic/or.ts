import { callOrReturn } from '../fn/callOrReturn'

/**
 * Accepts `arr` array of values/function. 
 * 
 * Returns true if one or more of them strictly equals `true`
 */
export function or(arr: (boolean | (() => boolean))[]): boolean {
	let t = 0
	for (let i = 0; i < arr.length; i++) {
		if (callOrReturn(arr[i]) === true) {
			return true
		}
	}
	return false
}