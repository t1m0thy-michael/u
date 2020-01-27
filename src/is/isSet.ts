/**
 * Returns `true` if `val` is a scalar value (Bool, Number or String), `false` otherwise.
 */
export const isSet = (obj: any): obj is Set<any> => (obj instanceof Set)