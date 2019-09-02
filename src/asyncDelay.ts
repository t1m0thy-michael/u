const asyncDelay = (seconds: number): Promise<any> => new Promise(resolve => setTimeout(resolve, seconds * 1000))

export default asyncDelay