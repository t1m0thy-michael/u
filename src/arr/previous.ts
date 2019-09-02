import { isFunction } from '../is/isFunction'
/**
 * Returns value and index of the next item in `arr` from `idx` for which `filter` returns true
 */
export const previous = (
	arr: any[],
	idx: number,
	filter = (val: any) => !!val
): { val: any, idx: Number } => {

	if (isFunction(filter)) {
		for (let i = idx - 1; i >= 0; i--) {
			if (filter(arr[i])) return { val: arr[i], idx: i }
		}
	} else {
		for (let i = idx - 1; i >= 0; i--) {
			if (arr[i] === filter) return { val: arr[i], idx: i }
		}
	}

	return { val: undefined, idx: -1 }
}