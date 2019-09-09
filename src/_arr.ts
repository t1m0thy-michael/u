export * from './arr/clean'
export * from './arr/every'
export * from './arr/next'
export * from './arr/previous'
export * from './arr/unique'

import { clean } from './arr/clean'
import { every } from './arr/every'
import { next } from './arr/next'
import { previous } from './arr/previous'
import { unique } from './arr/unique'

export const arr = {
	clean,
	every,
	next,
	previous,
	unique,
}

export default arr