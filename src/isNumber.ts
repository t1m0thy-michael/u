const isNumber = (val: any): val is number => (typeof val === 'number' && !isNaN(val))

export default isNumber