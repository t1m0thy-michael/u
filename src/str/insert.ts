
export interface Iinsert {
	/**
	 * Insert (as) string `a` into `b` at `position`.
	 * 
	 * ```js
	 * let myStr = 'Goodby world!'
	 * u.insert('cruel', myStr, 6) // 'Goodby cruel world!'
	 * ```
	 */
	(a: { toString: () => string }, b: string, position: number): string
}
export const insert:Iinsert = (a, b, position) => [b.slice(0, position), String(a), b.slice(position)].join('')