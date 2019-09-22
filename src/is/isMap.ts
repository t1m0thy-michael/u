/**
 * Returns `true` if `arr` is an array
 */
export const isMap = (obj: any): obj is Map<any, any> => (obj instanceof Map)