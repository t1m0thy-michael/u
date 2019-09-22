/**
 * Returns true is `val` is a between `a` and `b` (inclusive)
 */
export function isBetween (
	min: number,
	max: number,
	val: number
): boolean 
{
	return (val >= min && val <= max)
}