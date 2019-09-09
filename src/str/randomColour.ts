import { makeID } from './makeID'
/**
 * Returns a random hex colour code: '#AABBCC'
 */
export const randomColour = (): string => makeID(7, '#', '0123456789ABCDEF')