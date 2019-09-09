/**
 * Calls `func` on each element of `arr` in turn. `awaits` each call to `func`.
 *
 * Returns a promise which will resolve to a new array containing the elements for which `func` returned `true`.
 *
 * `func` is the first param in order to make `filter()` usefully curryable.
 *
 * ```js
 * let newFilteredArray = await u.async.filter(someAsyncFunction, myArray)
 * ```
 */
export const filter = async (func: <T>(val: T, idx: number, arr: T[]) => boolean, arr: any[]) => {
	const newArr = []
	for (let idx = 0; idx < arr.length; idx++) {
		if (await func(arr[idx], idx, arr) === true) {
			newArr.push(arr[idx])
		}
	}
	return newArr
}