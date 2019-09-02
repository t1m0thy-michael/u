const curry = (fn: Function): Function => {
	const createFunc = (n: number, args: any[]) =>
		(a: any) =>
			(n - 1 <= 0) ? fn(...args, a) : createFunc(n - 1, [...args, a])
	return createFunc(fn.length, [])
}

export default curry