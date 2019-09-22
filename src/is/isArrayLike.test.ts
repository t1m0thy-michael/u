const chai = require('chai')
const assert = chai.assert

import { isArrayLike } from './isArrayLike'

describe('isArrayLike()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isArrayLike, 'function', 'Is a function')
	})

	it('returns TRUE when passed an arraylike value', function () {
		assert.strictEqual(isArrayLike([]), true, 'An empty array')
		assert.strictEqual(isArrayLike('str'), true, 'A string')
	})

	it('returns False when passed a non-arraylike value', function () {
		assert.strictEqual(isArrayLike({}), false, 'An object')
		assert.strictEqual(isArrayLike(123), false, 'A number')
	})
})