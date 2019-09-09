import { decycle } from './decycle'

// TODO: Proper implementation of deep equal. This is crap
/**
 * Deep equal...
 * 
 * Crap implementation using JSON.stringify - object key order matters (and many other problems)
 */
export const equal = (obj1: any, obj2: any): boolean => {
	if (obj1 === obj2) return true
	return JSON.stringify(decycle(obj1)) === JSON.stringify(decycle(obj2))
}