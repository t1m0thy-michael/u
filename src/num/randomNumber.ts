export interface IrandomNumber {
	/** returns a random number value between `min` and `max` */
	(min?: number, max?: number): number
}

export const randomNumber: IrandomNumber = (min = 0, max = 10) => Math.random() * (max - min) + min