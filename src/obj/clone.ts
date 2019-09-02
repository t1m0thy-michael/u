import { decycle } from './decycle'
import { undecycle } from './undecycle'
// TODO: proper implementation of deep clone. This is crap.

/**
 * Creates deep clone of `obj`...
 * 
 * No it doesn't... crap implementation using JSON.parse(JSON.string.....
 */
export const clone = (obj: object): object => undecycle(JSON.parse(JSON.stringify(decycle(obj))))