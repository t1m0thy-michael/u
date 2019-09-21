export interface Iremove {
	(str: string, pos: number, len: number): string
	/** Remove `len` characters from `str` staring from `pos` */
}
export const remove:Iremove = (str, pos, len) => str.slice(0, pos) + str.slice(pos + len)