const isUndefined = (val: any): val is undefined => (typeof val === 'undefined')

export default isUndefined