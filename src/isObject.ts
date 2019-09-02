const isObject = (obj: any): obj is { [index: string]: string } => (obj != null && (typeof obj === 'object') && !Array.isArray(obj))

export default isObject