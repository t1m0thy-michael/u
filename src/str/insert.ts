/**
 * Insert `a` into `b` at `pos`.
 * 
 * ```js
 * let myStr = 'Goodby world!'
 * u.insert('cruel', myStr, 6) // 'Goodby cruel world!'
 * ```
 */
export const insert = (a: { toString: () => string }, b: string, pos: number): string =>
	[b.slice(0, pos), String(a), b.slice(pos)].join('')