import { getCacheKey } from './cache_key'
import { cache } from './cache'

export interface IlsCache {
	/**
	 * Creates new function that runs `fn` with `args` caching return value for future matching calls
	 * lscache() will match lscached values based on ALL arguments passed
	 */
	(fn: (...args: any[]) => any, fnKey: string): {
		(...args: any[]): any
	}
}

export const lscache: IlsCache = (fn) => {

	if (!window || !window.localStorage) {
		console.warn('lsCache(): localStorage not available. Using cache()')
		return cache(fn)
	}

	// determins if we should return an asyn function or not.
	let type = toString.call(fn)

	// do not lscache generator output!
	if (type.indexOf('Generator') > -1) return fn

	const fnKey = getCacheKey([fn])
	
	const nufn = (...args: any[]) => {
		const key = `__${fnKey}_${getCacheKey(args)}`
		let data = localStorage.getItem(key)
		if (data === null) localStorage.setItem(key, JSON.stringify(fn(...args)))
		// @ts-ignore
		return JSON.parse(localStorage.getItem(key))
	}

	return nufn
}

export default lscache