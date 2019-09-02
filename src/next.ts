import isFunction from './isFunction'

/**
 * Returns the next { val: any, idx: Number } in array that matches search criteria
 * @param arr Array to search
 * @param idx Starting index
 * @param filter Search function or value to match
 */
const next = (
	arr: any[],
	idx: number,
	filter = (val: any) => !!val): { val: any, idx: Number } => {

	if (isFunction(filter)) {
		for (let i = idx + 1; i >= 0; i++) {
			if (filter(arr[i])) return { val: arr[i], idx: i }
		}
	} else {
		for (let i = idx + 1; i >= 0; i++) {
			if (arr[i] === filter) return { val: arr[i], idx: i }
		}
	}

	return { val: undefined, idx: -1 }
}

export default next