const isBool = (val: any): val is boolean => (typeof val === 'boolean')

export default isBool