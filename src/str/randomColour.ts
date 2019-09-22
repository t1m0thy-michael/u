import { makeID } from './makeID'

export interface IrandomColor {
	/** Returns a random hex colour code: '#AABBCC' */
	(): string
}
export const randomColour = (): string => makeID(7, '#', '', '0123456789ABCDEF')