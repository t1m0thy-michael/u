export * from './str/insert'
export * from './str/makeID'
export * from './str/randomColour'
export * from './str/remove'

import { insert } from './str/insert'
import { makeID } from './str/makeID'
import { randomColour } from './str/randomColour'
import { remove } from './str/remove'

/**
 * String manipulation functions and utils that return strings.
 */
export const str = {
	insert,
	makeID,
	randomColour,
	remove,
}

export default str