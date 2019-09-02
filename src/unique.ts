import makeSureItsAnArray from './makeSureItsAnArray'

const unique = (arr1: any[], arr2: any[]): any[] => Array.from(new Set([...makeSureItsAnArray(arr1), ...makeSureItsAnArray(arr2)]))

export default unique