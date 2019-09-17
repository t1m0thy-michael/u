import { isFunction } from '../is/isFunction'

export interface Iprevious {
	/**
	 * Returns value and index of the next item in `arr` from `idx` for which `filter` returns true
	 */
	(
		arr: any[],
		idx: number,
		filter?: ((val: any) => boolean) | any
	): { val: any, idx: Number }
}

export const previous: Iprevious = (arr, idx, filter = (val: any) => !!val) => {

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