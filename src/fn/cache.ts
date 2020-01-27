import { getCacheKey } from './cache_key'

export interface Icache {
	/**
	 * Creates new function that runs `fn` with `args` caching return value for future matching calls
	 * cache() will match cached values based on ALL arguments passed
	 */
	(fn: (...args: any[]) => any): {
		(...args: any[]): any
	}
}

export const cache: Icache = (fn) => {
	// the cache
	const resultCache: {
		[index: string]: any
	}= {}

	// determins if we should return an asyn function or not.
	let type = toString.call(fn)

	// do not cache generator output!
	if (type.indexOf('Generator') > -1) return fn

	const nufn = (...args: any[]) => {
		const key = getCacheKey(args)
		if (!(key in resultCache)) resultCache[key] = fn(...args)
		return resultCache[key]
	}

	return nufn
}

export default cache