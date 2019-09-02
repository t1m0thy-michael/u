const asyncFilter = async (arr: any, func: any) => {
	const newArr = []
	for (let idx = 0; idx < arr.length; idx++) {
		if (await func(arr[idx], idx, arr)) {
			newArr.push(arr[idx])
		}
	}
	return newArr
}

export default asyncFilter