/**
 * Clamps `val` between `min` and `max`.
 */
export function clamp (
	min: number, 
	max: number, 
	val: number): number 
{
	if (val <= min) return min
	if (val >= max) return max
	return val
}