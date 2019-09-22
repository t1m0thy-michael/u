import { isFunction } from '../is/isFunction'

export interface Inext {
	/** Returns value and index of the next item in `arr` from `idx` for which `filter` returns true */
	(
		arr: any[],
		idx: number,
		filter?: ((val: any) => boolean) | any
	): { val: any, idx: Number }
}
export const next:Inext = (arr, idx, filter = (val: any) => !!val) => {

	if (isFunction(filter)) {
		for (let i = idx + 1; i < arr.length; i++) {
			if (filter(arr[i])) return { val: arr[i], idx: i }
		}
	} else {
		for (let i = idx + 1; i < arr.length; i++) {
			if (arr[i] === filter) return { val: arr[i], idx: i }
		}
	}

	return { val: undefined, idx: -1 }
}