export * from './obj/clone'
export * from './obj/decycle'
export * from './obj/equal'
export * from './obj/get'
export * from './obj/set'
export * from './obj/sizeOf'
export * from './obj/undecycle'

import { clone } from './obj/clone'
import { decycle } from './obj/decycle'
import { equal } from './obj/equal'
import { get } from './obj/get'
import { set } from './obj/set'
import { sizeOf } from './obj/sizeOf'
import { undecycle } from './obj/undecycle'

export const obj = {
	clone,
	decycle,
	equal,
	get,
	set,
	sizeOf,
	undecycle,
}

export default obj