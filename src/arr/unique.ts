export interface Iunique {
	/** Returns a new array containing one instance of each value from `arr1` ad `arr2`. */
	<T>(...args: T[][]): T[]
}
export const unique:Iunique = (...args) => {
	const out: any[] = []
	return Array.from(new Set(out.concat(...args)))
}