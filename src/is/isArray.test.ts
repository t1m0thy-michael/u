const chai = require('chai')
const assert = chai.assert

import { isArray } from './isArray'

describe('isArray()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isArray, 'function', 'Is a function')
	})

	it('returns TRUE when passed an array', function () {
		assert.strictEqual(isArray([]), true, 'An empty array')
		assert.strictEqual(isArray([123, 'str', null, {},
			[]
		]), true, 'An empty array')
	})

	it('returns FALSE when not passed an array', function () {
		assert.strictEqual(isArray(undefined), false, 'Nothing')
		assert.strictEqual(isArray(0), false, 'Zero')
		assert.strictEqual(isArray(123), false, 'Number')
		assert.strictEqual(isArray(''), false, 'Empty string')
		assert.strictEqual(isArray('str'), false, 'String')
		assert.strictEqual(isArray(null), false, 'null')
		assert.strictEqual(isArray({}), false, 'Object')
		assert.strictEqual(isArray(true), false, 'Bool - true')
	})
})