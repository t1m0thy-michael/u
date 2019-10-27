
export interface Icache {
	/**
	 * Creates new function that runs `fn` with `args` caching return value for future matching calls
	 */
	(fn: (...args: any[]) => any): {
		(...args: any[]): any,
		reset: () => void,
		cacheSize: () => number,
	}
}
export const cache:Icache = (fn) => {

	let cache: { [index: string ]: string } = {}

	const nufn = (...args: any) => {
		const key = args.toString()
		if (!cache[key]) cache[key] = fn(...args)
		return cache[key]
	}

	nufn.reset = () => cache = {}
	nufn.cacheSize = () => Object.keys(cache).length

	return nufn
}