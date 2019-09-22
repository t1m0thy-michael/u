import { isNumber } from './isNumber'
/**
 * Returns true is `val` is an integer
 */
export const isInteger = (val: any): val is number => (isNumber(val) && val % 1 === 0)