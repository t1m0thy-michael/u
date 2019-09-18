const chai = require('chai')
const assert = chai.assert

import { isNull } from './isNull'

describe('isNull()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isNull, 'function', 'Is a function')
	})

	it('returns TRUE when passed valid numbers or strings', function () {
		assert.ok(isNull(null))
	})

	it('returns FALSE when passed valid numbers or strings', function () {
		assert.ok(!isNull('a value'))
		assert.ok(!isNull('null'))
		assert.ok(!isNull(0))
		assert.ok(!isNull([]))
		assert.ok(!isNull({}))
	})
})