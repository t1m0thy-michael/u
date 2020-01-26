export * from './fn/cache'
export * from './fn/callOrReturn'
export * from './fn/curry'
export * from './fn/maybeCall'

import { cache } from './fn/cache'
import { lscache } from './fn/lscache'
import { callOrReturn } from './fn/callOrReturn'
import { curry } from './fn/curry'
import { maybeCall } from './fn/maybeCall'

/**
 * Functional programming stuff
 */
export const fn = {
	cache,
	lscache,
	callOrReturn,
	curry,
	maybeCall,
}

export default fn