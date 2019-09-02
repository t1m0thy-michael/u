import makeID from './makeID'

const randomColor = (): string => makeID(7, '#', '0123456789ABCDEF')

export default randomColor