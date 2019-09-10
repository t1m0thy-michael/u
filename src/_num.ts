export * from './num/clamp'
export * from './num/randomInt'
export * from './num/randomNumber'

import { clamp } from './num/clamp'
import { randomInt } from './num/randomInt'
import { randomNumber } from './num/randomNumber'

/**
 * Maths and other number related functions.
 */
export const num = {
	clamp,
	randomInt,
	randomNumber,
}

export default num