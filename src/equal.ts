// TODO: Proper implementation of deep equal. This is crap
// TODO: at least use decycle !
const equal = (obj1: any, obj2: any): boolean => {
	if (obj1 === obj2) return true
	return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export default equal