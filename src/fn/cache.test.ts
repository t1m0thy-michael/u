const chai = require('chai')
const assert = chai.assert

import { cache } from './cache'

describe('cache()', function () {

	it('Is a function', function () {
		assert.isFunction(cache, 'Is a function')
	})

	it('Retuns new function', function () {
		const testFn = (a: number, b: number, c: number): number => a + b + c
		const nufn = cache(testFn)
		assert.notStrictEqual(nufn, testFn)
	})

	it('Retuns same function when passed a generator', function () {
		const testFn = function* (a: number, b: number, c: number) { yield a + b + c }
		const nufn = cache(testFn)
		assert.strictEqual(nufn, testFn)
	})

	it('Returns the same output as the orignal function - args', function () {
		const testFn = (a: number, b: number, c: number = 0): number => a + b + c
		const nufn = cache(testFn)
		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(10, 20), nufn(10, 20))
		assert.strictEqual(testFn(10, 20), nufn(10, 20))
	})

	it('Returns the same output as the orignal function - obj', function () {
		const testFn = (a: { a: number, b: number, c: number }): number => a.a + a.b + a.c
		const nufn = cache(testFn)
		const obj = { a: 1, b: 2, c: 3 }
		assert.strictEqual(testFn(obj), nufn(obj))
		assert.strictEqual(testFn(obj), nufn(obj))
	})

	it('Returns the same output as the orignal function - mixed', function () {
		const testFn = (a: { a: number, b: number, c: number }, d: number, e: any, f: number, g: any): number => a.a + a.b + a.c + d + f
		const nufn = cache(testFn)
		const obj = { a: 1, b: 2, c: 3 }
		assert.strictEqual(testFn(obj, 1, null, 2, undefined), nufn(obj, 1, null, 2, undefined))
		assert.strictEqual(testFn(obj, 1, null, 2, undefined), nufn(obj, 1, null, 2, undefined))
	})

	it('Returns a promise when caching an async function', async function () {
		const testFn = async (a: number, b: number, c: number = 0): Promise<number> => a + b + c
		const nufn = cache(testFn)
		assert.ok(nufn(1,2,3) instanceof Promise)
	})

})