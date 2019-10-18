export interface ImakeID {
	/**
	 * Returns a random string of `length`, including optional `prefix` character. 
	 * 
	 * Default `possible` chars are alphanumeric and '_'
	 */
	(length: number, prefix: string, suffix: string, possible: string ): string
}
export const makeID = (
	length = 8,
	prefix = '',
	suffix = '',
	possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
) => {
	
	let str = ''
	let len = length - (prefix.length + suffix.length)

	for (let i = 1; i <= len; i++) {
		str += possible.charAt(Math.floor(Math.random() * possible.length))
	}

	return `${prefix}${str}${suffix}`
}

