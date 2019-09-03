import isFunction from './isFunction'
import isRealNaN from './isRealNaN'

/**
 * Removes all instances of deleteValue from arr. 
 * NaN does === NaN here!
 * @param arr 
 * @param deleteValue 
 */
const cleanArray = (
	arr: any[],
	deleteValue: any): any[] => {
	if (!isFunction(deleteValue)) {
		return arr.filter((val) => {
			if (isRealNaN(deleteValue) && isRealNaN(val)) return false
			return val !== deleteValue
		})
	}
	return arr.filter((val) => !deleteValue(val))
}

export default cleanArray