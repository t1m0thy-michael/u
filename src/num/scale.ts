export interface Iscale{
	/** Scales a number `n` from range `rawMin`:`rawMax` to within range 'targetMin`:`targetMax`  */
	(n: number, rawMin: number, rawMax: number, targetMin: number, targetMax: number): number
}

export const scale: Iscale = (n, rawMin, rawMax, targetMin, targetMax) => (targetMax - targetMin) / (rawMax - rawMin) * (n - rawMax) + targetMax