const chai = require('chai')
const assert = chai.assert

import { cache } from './cache'

describe('cache()', function () {

	it('Is a function', function () {
		assert.isFunction(cache, 'Is a function')
	})

	const testFn = (a: number, b: number, c: number): number => a + b + c
	const nufn = cache(testFn)

	it('Retuns new function', function () {
		assert.notStrictEqual(cache(testFn), testFn)
	})

	it('Retuns new function with additional methods', function () {
		assert.isFunction(nufn.reset, 'Is a function', 'reset')
		assert.isFunction(nufn.cacheSize, 'Is a function', 'cachSize')
	})

	it('Returns the same output as the orignal function', function () {

		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(1, 2, 3), nufn(1, 2, 3))
		assert.strictEqual(testFn(10, 20, 30), nufn(10, 20, 30))
		assert.strictEqual(testFn(10, 20, 30), nufn(10, 20, 30))

	})

})