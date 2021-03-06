export interface IasyncForEach {
	/**
	 * Calls `fn` on each element of `arr` in turn. `awaits` each call to `fn`.
	 *
	 * `fn` is the first param in order to make `filter()` usefully curryable.
	 *
	 * @param fn
	 * @param arr
	 * @return void
	 * 
	 * @remarks
	 * This method is exposed as u.async.foreach()
	 * 
	 * ```js
	 * await u.async.forEach(async () => true, myArray)
	 * ```
	 */
	<T>(fn: (val: T, idx: number, arr: T[]) => any, arr: T[]): Promise<void>	
}
export const forEach:IasyncForEach = async (fn, arr) => {
	for (let idx = 0; idx < arr.length; idx++) {
		await fn(arr[idx], idx, arr)
	}
}