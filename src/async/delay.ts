/**
 * Returns a promise which will resolve in `seconds`.
 * 
 * Limited to noraml setTimeout / backgrounding issues.
 * 
 * ```js
 * //do some stuff...
 * await u.async.delay(2)
 * // 2 seconds later do some more stuff...
 * ``` 
 */
export const delay = async (seconds: number): Promise<any> =>
	new Promise(resolve => setTimeout(resolve, seconds * 1000))
