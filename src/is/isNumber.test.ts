const chai = require('chai')
const assert = chai.assert

import { isNumber } from './isNumber'

describe('isNumber()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isNumber, 'function', 'Is a function')
	})

	it('returns TRUE when passed a number', function () {
		assert.strictEqual(isNumber(123), true, 'An integer')
		assert.strictEqual(isNumber(0), true, 'Zero')
		assert.strictEqual(isNumber(0.123), true, 'A float')
		assert.strictEqual(isNumber(Infinity), true, 'Infinity')
	})

	it('returns FALSE when not passed a number', function () {
		assert.strictEqual(isNumber(undefined), false, 'Nothing')
		assert.strictEqual(isNumber('123'), false, 'Int string')
		assert.strictEqual(isNumber('0'), false, 'Zero string')
		assert.strictEqual(isNumber(''), false, 'empty string')
		assert.strictEqual(isNumber(null), false, 'null')
		assert.strictEqual(isNumber([]), false, 'Array')
		assert.strictEqual(isNumber({}), false, 'Object')
		assert.strictEqual(isNumber(true), false, 'Bool - true')
	})
})