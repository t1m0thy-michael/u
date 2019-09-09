export * from './_arr'
export * from './_async'
export * from './_fn'
export * from './_is'
export * from './_num'
export * from './_obj'
export * from './_str'

import arr from './_arr'
import async from './_async'
import fn from './_fn'
import is from './_is'
import num from './_num'
import obj from './_obj'
import str from './_str'

import { makeSureItsAnArray } from './makeSureItsAnArray'

export default {
	...arr,
	...async,
	...fn,
	...is,
	...num,
	...obj,
	...str,
	makeSureItsAnArray,
}