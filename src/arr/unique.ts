import { makeSureItsAnArray } from '../util/makeSureItsAnArray'

/**
 * Returns a new array containing one instance of each value from `arr1` ad `arr2`.
 */
export const unique = (arr1: any[], arr2: any[]): any[] => Array.from(new Set([...makeSureItsAnArray(arr1), ...makeSureItsAnArray(arr2)]))