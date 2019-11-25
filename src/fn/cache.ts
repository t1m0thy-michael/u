/* eslint require-atomic-updates: off */
// above rule :off due to line in nufnAsync:
// if (!(key in resultCache)) resultCache[key] = await fn(...args)
// This is not a race condition that matters!

export interface Icache {
	/**
	 * Creates new function that runs `fn` with `args` caching return value for future matching calls
	 * cache() will match cached values based on ALL arguments passed
	 */
	(fn: (...args: any[]) => any): {
		(...args: any[]): any
	}
}
const CACHE_KEY_NAME = '__FN_CACHE_KEY__'
export const cache: Icache = (fn) => {

	// the cache
	let resultCache: {
		[index: string]: any
	} = {}

	// unique ID for Object type arguments
	// this id will be stored as a non-enumerable, non writable property of the object
	let objCacheId = 0

	// determins if we should return an asyn function or not.
	let type = toString.call(fn)

	// The returned functions, nufn and nufnAsync are mostly the same as each other.
	// For some reason breaking out the 'get key' in to a  separate function has a massive impact on performance

	const nufn = (...args: any[]) => {
		let key = ''
		// get key
		for (let i in args) {
			if (!args[i]) {
				key += args[i]

			} else if (typeof args[i] === 'object') {
				if (args[i] && !args[i][CACHE_KEY_NAME]) {
					Object.defineProperty(args[i], CACHE_KEY_NAME, {
						value: ++objCacheId
					})
				}
				key += args[i][CACHE_KEY_NAME]
			} else {
				key += String(args[i])
			}
		}

		if (!(key in resultCache)) resultCache[key] = fn(...args)
		return resultCache[key]
	}

	const nufnAsync = async (...args: any[]) => {
		let key = ''
		// get key
		for (let i in args) {
			if (!args[i]) {
				key += args[i]

			} else if (typeof args[i] === 'object') {
				if (args[i] && !args[i][CACHE_KEY_NAME]) {
					Object.defineProperty(args[i], CACHE_KEY_NAME, {
						value: ++objCacheId
					})
				}
				key += args[i][CACHE_KEY_NAME]
			} else {
				key += String(args[i])
			}
		}

		if (!(key in resultCache)) resultCache[key] = await fn(...args)
		return resultCache[key]
	}

	// do not cache generator output!
	if (type.indexOf('Generator') > -1) return fn

	// return async fn
	if (type.indexOf('Async') > -1) return nufnAsync

	return nufn
}

export default cache