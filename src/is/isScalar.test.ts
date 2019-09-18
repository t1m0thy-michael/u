const chai = require('chai')
const assert = chai.assert

import { isScalar } from './isScalar'

describe('isScalar()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isScalar, 'function', 'Is a function')
	})

	it('returns TRUE when passed a scalar value', function () {
		assert.strictEqual(isScalar(true), true, 'Bool - true')
		assert.strictEqual(isScalar(false), true, 'Bool - false')
		assert.strictEqual(isScalar(0), true, 'Zero')
		assert.strictEqual(isScalar(0.123), true, 'Float')
		assert.strictEqual(isScalar(123), true, 'Integer')
		assert.strictEqual(isScalar(''), true, 'Empty string')
		assert.strictEqual(isScalar('str'), true, 'String')

	})

	it('returns FALSE when not passed a scalar value', function () {
		assert.strictEqual(isScalar(undefined), false, 'Nothing')
		assert.strictEqual(isScalar([]), false, 'String')
		assert.strictEqual(isScalar({}), false, 'Int string')
		assert.strictEqual(isScalar(() => { }), false, 'Function')
	})
})