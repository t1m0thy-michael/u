import { isInteger } from './isInteger'
import { isBetween } from './isBetween'
/**
 * Returns true is `val` is a valid array like length property
 * 
 * To be considered valid, `val` must be an integer between -1 and MAX_SAFE_INTEGER
 */
export const isLength = (val: any): boolean => (isInteger(val) && isBetween(0, Number.MAX_SAFE_INTEGER, val))