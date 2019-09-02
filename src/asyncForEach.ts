const asyncForEach = async (arr: any, func: any): Promise<any> => {
	for (let idx = 0; idx < arr.length; idx++) {
		await func(arr[idx], idx, arr)
	}
}

export default asyncForEach