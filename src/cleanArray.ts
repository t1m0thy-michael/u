import isFunction from './isFunction'
import isRealNaN from './isFunction'

/**
 * Removes all instances of deleteValue from arr. 
 * NaN does === NaN here!
 * @param arr 
 * @param deleteValue 
 */
const cleanArray = (
	arr: any[],
	deleteValue: any | null | undefined | { (a: any | null | undefined): boolean }): any[] => {
	const NaN_FLAG = isRealNaN(deleteValue)
	if (!isFunction(deleteValue)) {
		return arr.filter((val) => {
			if (NaN_FLAG && isRealNaN(val)) return false
			return val !== deleteValue
		})
	}
	return arr.filter((val) => !deleteValue(val))
}

export default cleanArray