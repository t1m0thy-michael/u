/**
 * Calls `func` on each element of `arr` in turn. `awaits` each call to func
 * 
 * Returns a promise which will resolve to a new array containing `func`s return values.
 * 
 * `func` is the first param in order to make `map()` usefully curryable.
 *
 * ```js
 * let newArray = await u.async.map(someAsyncFunction, myArray)
 * ```
 */
export const map = async <T>(func: <T>(val: T, idx: number, arr: T[]) => any, arr: T[]): Promise<T[]> => {
	const newArr = []
	for (let idx = 0; idx < arr.length; idx++) {
		newArr.push(await func(arr[idx], idx, arr))
	}
	return newArr
}