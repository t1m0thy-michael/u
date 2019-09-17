const chai = require('chai')
const assert = chai.assert

import { curry } from './curry'

describe('_fn', function () {

	describe('curry()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof curry, 'function', 'Is a function')
		})

		it('Returns a function that accepts a single argument', function () {
			let fn = curry((a, b, c) => a + b + c)
			assert.ok(typeof fn === 'function', 'Returned a function...')
			assert.strictEqual(fn.length, 1, 'Returned function expects single argument')
		})

		it('Returns expected results - simple chain', function () {
			let fn = curry((a, b, c) => a + b + c)
			assert.strictEqual(fn(1)(1)(1), 3, 'Returned 3')
			assert.strictEqual(fn(1)(2)(3), 6, 'Returned 6')
		})

		it('Returns expected results - reuse second stage', function () {
			let fn = curry((a, b, c) => a + b + c)
			let a = fn(1)
			let b = a(1)
			let c = b(1)
			assert.strictEqual(c, 3, 'First use returns 3')
			assert.strictEqual(b(2), 4, 'Reuse stage 2')
			assert.strictEqual(b(-1), 1, 'Reuse 2nd stage again')
		})
	})
})