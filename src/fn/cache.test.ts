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

	it('Retuns new function with additional methods', function () {
		const testFn = (a: number, b: number, c: number): number => a + b + c
		const nufn = cache(testFn)
		assert.isFunction(nufn.reset, 'Is a function', 'reset')
		assert.isFunction(nufn.cacheSize, 'Is a function', 'cachSize')
	})

	it('Returns the same output as the orignal function', function () {
		const testFn = (a: number, b: number, c: number = 0): number => a + b + c
		const nufn = cache(testFn)
		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(10, 20), nufn(10, 20))
		assert.strictEqual(testFn(10, 20), nufn(10, 20))
	})

	it('cacheSize returns expected result', function () {
		const testFn = (a: number, b: number, c: number): number => a + b + c
		const nufn = cache(testFn)

		nufn(1, 2, 3)
		assert.equal(nufn.cacheSize(), 1)
		nufn(1, 2, 3)
		assert.equal(nufn.cacheSize(), 1)

		nufn(10, 20, 30)
		assert.equal(nufn.cacheSize(), 2)
	})



	it('reset affects cacheSize as expected', function () {
		const testFn = (a: number, b: number, c: number): number => a + b + c
		const nufn = cache(testFn)

		nufn(1, 2, 3)
		assert.equal(nufn.cacheSize(), 1)
		nufn.reset()
		assert.equal(nufn.cacheSize(), 0)

		nufn(1, 2, 3)
		nufn(10, 20, 30)
		assert.equal(nufn.cacheSize(), 2)
		nufn.reset()
		assert.equal(nufn.cacheSize(), 0)
	})

})