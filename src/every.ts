import makeSureItsAnArray from './makeSureItsAnArray'

/**
 * fn is first arg to make this usefully curryable
 */
const every = (fn: (...args: any[]) => any, arr: any): boolean => 
	makeSureItsAnArray(arr).every(fn)

export default every