/**
 * Remove `len` characters from `str` staring from `pos`
 */
export const remove = (str: string, pos: number, len: number) => str.slice(0, pos) + str.slice(pos + len)