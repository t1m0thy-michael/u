/* eslint require-atomic-updates: off */

import { isScalar } from '../is/isScalar'

export interface IgetCacheKey {
	/**

	 */
	(args: any[]): any
}

// objects will map to an Id which is then used for resultCache key
const objKeyMap = new WeakMap()
let objKeyMapId = 0

export const getCacheKey: IgetCacheKey = (args: any) => {
	
	let key = ''
	for (let i in args) {

		if (isScalar(args[i]) || !args[i]) {
			key += args[i]

		} else if (objKeyMap.has(args[i])) {
			key += `o_${objKeyMap.get(args[i])}`

		} else {
			const nuKey = ++objKeyMapId
			objKeyMap.set(args[i], objKeyMapId)
			key += `o_${nuKey}`
		}
	}

	return key
}

export default getCacheKey