const chai = require('chai')
const assert = chai.assert

import { isLength } from './isLength'

describe('isLength()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isLength, 'function', 'Is a function')
	})

	it('returns TRUE', function () {
		assert.strictEqual(isLength(0), true, '0')
		assert.strictEqual(isLength(100), true, '100')
	})

	it('returns FALSE', function () {
		assert.strictEqual(isLength(-1), false, '-1')
		assert.strictEqual(isLength('str'), false, '100')
	})
})