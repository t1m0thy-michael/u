import { isLength } from './isLength'

/**
 * Returns true is `arr` is array like.
 * 
 * "Array like" means:
 * 	- Not a function
 * 	- Has a valid length property (see isLength)
 */
export const isArrayLike = (arr: any): arr is ArrayLike<any> => (arr && typeof arr !== 'function' && isLength(arr.length))