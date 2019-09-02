const isRealNaN = (val: any): boolean => (typeof val === 'number' && isNaN(val))

export default isRealNaN