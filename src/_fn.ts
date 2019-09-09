export * from './fn/callOrReturn'
export * from './fn/curry'
export * from './fn/maybeCall'

import { callOrReturn } from './fn/callOrReturn'
import { curry } from './fn/curry'
import { maybeCall } from './fn/maybeCall'

export const fn = {
	callOrReturn,
	curry,
	maybeCall,
}

export default fn