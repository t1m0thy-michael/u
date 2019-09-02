const asyncMap = async (arr: any, func: any) => {
	const newArr = []
	for (let idx = 0; idx < arr.length; idx++) {
		newArr.push(await func(arr[idx], idx, arr))
	}
	return newArr
}

export default asyncMap