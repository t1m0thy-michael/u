const chai = require('chai')
const assert = chai.assert

import { isNumberish } from './isNumberish'

describe('isNumberish()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isNumberish, 'function', 'Is a function')
	})

	it('returns TRUE when passed valid numbers or strings', function () {
		assert.ok(isNumberish(0))
		assert.ok(isNumberish(1))
		assert.ok(isNumberish(1.12345))
		assert.ok(isNumberish(0.12345))
		assert.ok(isNumberish(12345789))
		assert.ok(isNumberish('0'))
		assert.ok(isNumberish('1'))
		assert.ok(isNumberish('1.12345'))
		assert.ok(isNumberish('.12345'))
		assert.ok(isNumberish('123456789'))
		assert.ok(isNumberish('1e10000')) // infinity
		assert.ok(isNumberish('1e2'))
		assert.ok(isNumberish(12345789))
	})

	it('returns FALSE when passed valid numbers or strings', function () {
		assert.ok(!isNumberish('str'))
		assert.ok(!isNumberish('0.12d34'))
		assert.ok(!isNumberish('.'))
		assert.ok(!isNumberish('2/2'))
	})
})