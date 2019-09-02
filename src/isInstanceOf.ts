const isInstanceOf = (type: string, val: any): boolean => {
	try {
		return (val instanceof eval(type))
	} catch (e) {
		return false
	}
}

export default isInstanceOf