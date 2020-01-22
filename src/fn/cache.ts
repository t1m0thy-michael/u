/* eslint require-atomic-updates: off */

import { isScalar } from '../is/isScalar'

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

	// objects will map to an Id which is then used for resultCache key
	const objKeyMap = new WeakMap()
	let objKeyMapId = 0

	// determins if we should return an asyn function or not.
	let type = toString.call(fn)

	// do not cache generator output!
	if (type.indexOf('Generator') > -1) return fn

	const nufn = (...args: any[]) => {
		let key = ''
		for (let i in args) {

			if (isScalar(args[i]) || !args[i]) {
				key += args[i]

			} else if (objKeyMap.has(args[i])) {
				key += objKeyMap.get(args[i])

			} else {
				const nuKey = ++objKeyMapId
				objKeyMap.set(args[i], objKeyMapId)
				key += nuKey
			}
		}

		if (!(key in resultCache)) resultCache[key] = fn(...args)
		return resultCache[key]
	}

	return nufn
}

export default cache