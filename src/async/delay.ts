export interface Idelay {
	/**
	 * Returns a promise which will resolve in `seconds`.
	 * 
	 * Limited to normal setTimeout / backgrounding issues.
	 * 
	 * ```js
	 * //do some stuff...
	 * await u.async.delay(2)
	 * // 2 seconds later do some more stuff...
	 * ``` 
	 */
	(seconds: number): Promise<true>
}
export const delay:Idelay = async (seconds) =>
	new Promise(resolve => setTimeout(() => resolve(true), seconds * 1000))
