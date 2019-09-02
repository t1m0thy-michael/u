const isArrayLike = (arr: any): arr is { length: number } => (arr && typeof arr !== 'function' && typeof arr.length !== 'undefined')

export default isArrayLike