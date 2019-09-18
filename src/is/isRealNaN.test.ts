const chai = require('chai')
const assert = chai.assert

import { isRealNaN } from './isRealNaN'

describe('isRealNaN()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isRealNaN, 'function', 'Is a function')
	})

	it('returns true', function () {
		assert.strictEqual(isRealNaN(NaN), true)
	})

	it('returns false', function () {
		assert.strictEqual(isRealNaN('somerandomnotanumberthing'), false)
	})
})