const chai = require('chai')
const assert = chai.assert

import { sizeOf } from './sizeOf'

describe('sizeOf()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof sizeOf, 'function', 'Is a function')
	})

	it('Report correct size', function () {
		assert.strictEqual(sizeOf({}), 0)
		assert.strictEqual(sizeOf([]), 0)
		assert.strictEqual(sizeOf([0, 1, 2, 3, 4, 5]), 6)
		assert.strictEqual(sizeOf({a: 0, b: 1, c: 2}), 3)
		assert.strictEqual(sizeOf('str'), 3)
		assert.strictEqual(sizeOf(10), 0)
		assert.strictEqual(sizeOf(null), 0)
		assert.strictEqual(sizeOf(undefined), 0)

		const map = new Map([[1, 'one'], [2, 'two']])
		assert.strictEqual(sizeOf(map), 2)
	})
})