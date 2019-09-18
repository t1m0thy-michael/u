const chai = require('chai')
const assert = chai.assert

import { isString } from './isString'

describe('isString()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isString, 'function', 'Is a function')
	})

	it('returns TRUE when passed a string', function () {
		assert.strictEqual(isString(''), true, 'Empty string')
		assert.strictEqual(isString('string'), true, 'String')
	})

	it('returns FALSE when not passed a string', function () {
		assert.strictEqual(isString(undefined), false, 'Nothing')
		assert.strictEqual(isString(true), false, 'Bool - true')
		assert.strictEqual(isString(0), false, 'Zero')
		assert.strictEqual(isString(0.123), false, 'Float')
		assert.strictEqual(isString(123), false, 'Integer')
		assert.strictEqual(isString([]), false, 'Array')
		assert.strictEqual(isString({}), false, 'Object')
		assert.strictEqual(isString(() => { }), false, 'Function')
	})
})