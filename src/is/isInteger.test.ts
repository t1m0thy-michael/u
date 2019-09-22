const chai = require('chai')
const assert = chai.assert

import { isInteger } from './isInteger'

describe('isInteger()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isInteger, 'function', 'Is a function')
	})

	it('Returns TRUE', function () {
		assert.strictEqual(isInteger(1), true, '1')
	})

	it('Returns FALSE', function () {
		assert.strictEqual(isInteger(1.1), false, '1.1')
	})
})