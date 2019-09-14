export interface IrandomInt {
	/** returns a random integer value between `min` and `max` */
	(min?: number, max?: number): number
}

export const randomInt:IrandomInt = (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => 
	Math.floor(Math.random() * (max - min + 1)) + min