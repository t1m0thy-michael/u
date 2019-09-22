export interface Iclamp{
	/** Clamps number `val` between `min` and `max` values. */
	(min: number, max: number, val: number): number
}

export const clamp: Iclamp = (min, max, val) => {
	if (val <= min) return min
	if (val >= max) return max
	return val
}