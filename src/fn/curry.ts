
export interface Icurry {
	/**
	 * Curry a function.
	 * 
	 * Returns a function that will accept the first arg of `fn`. 
	 * That function will return a function the accepts the second arg 
	 * and so on until all arguments have been passed. The final 
	 * function will return `fn`s return value.
	 * 
	 * If `fn` has optional arguments, you can pass `len` to `curry()`
	 * to take these args into account, otherwise the value of fn.length 
	 * will be used (this excludes optional args).
	 * 
	 * ```js
	 * const myFn = (a, b, c, d = 0) => a + b + c
	 * const curried = u.curry(myFn, 4)
	 * curried(2)(2)(2)(2) // expected: 8
	 * ```
	 */
	(fn: (...args: any[]) => any, len?: number): (a: any) => any
}
export const curry:Icurry = (fn, len) => {
	const createFunc = (n: number, args: any[]) =>
		(a: any) =>
			(n - 1 <= 0) ? fn(...args, a) : createFunc(n - 1, [...args, a])
	return createFunc(len || fn.length, [])
}