const isIterable = (obj: any): boolean => (obj != null && (typeof obj[Symbol.iterator] === 'function'))

export default isIterable