import { decycle } from './decycle'
import { undecycle } from './undecycle'

export interface Iclone {
	(obj: object): object
}

// TODO: proper implementation of deep clone. This is crap.

/**
 * Creates deep clone of `obj`...
 * 
 * No it doesn't... crap implementation using JSON.parse(JSON.string.....
 */
export const clone:Iclone = (obj) => undecycle(JSON.parse(JSON.stringify(decycle(obj))))