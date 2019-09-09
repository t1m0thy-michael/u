export * from './async/delay'
export * from './async/filter'
export * from './async/forEach'
export * from './async/map'

import { delay } from './async/delay'
import { filter } from './async/filter'
import { forEach } from './async/forEach'
import { map } from './async/map'

export const async = {
	delay,
	filter,
	forEach,
	map,
}

export default async