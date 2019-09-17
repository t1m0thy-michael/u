export * from './_arr'
export * from './_async'
export * from './_fn'
export * from './_is'
export * from './_logic'
export * from './_num'
export * from './_obj'
export * from './_str'
export * from './_util'

import arr from './_arr'
import async from './_async'
import fn from './_fn'
import is from './_is'
import logic from './_logic'
import num from './_num'
import obj from './_obj'
import str from './_str'
import util from './_util'

/**
 * Utilities Lib
 */
const u = {
	...arr,
	...async,
	...fn,
	...is,
	...logic,
	...num,
	...obj,
	...str,
	...util,
}

export default u