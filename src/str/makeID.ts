/**
 * Returns a random string of `length`, including `prefix` character. 
 * 
 * Default `possible` chars are alphanumeric and '_'
 */
export const makeID = (
	length: number = 8,
	prefix: string = '_',
	possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
): string => {
	for (let i = 0; i < length - 1; i++) {
		prefix += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return prefix
}