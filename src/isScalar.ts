const isScalar = (val: any): val is boolean | string | number => ['boolean', 'number', 'string'].includes(typeof val)

export default isScalar