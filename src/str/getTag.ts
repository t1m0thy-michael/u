
export interface IgetTag {
	/**
	 * Returns tag like [object Object] / [object String]
	 */
	(val: any): string
}
export const getTag: IgetTag = (val) => {
	if (val == null) return val === undefined ? '[object Undefined]' : '[object Null]'
	return Object.prototype.toString.call(val)
}

export default getTag