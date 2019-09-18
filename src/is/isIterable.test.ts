const chai = require('chai')
const assert = chai.assert

import { isIterable } from './isIterable'

describe('isIterable()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isIterable, 'function', 'Is a function')
	})

	it('returns TRUE when passed an iterable', function () {
		assert.strictEqual(isIterable('string'), true, 'An array')
		assert.strictEqual(isIterable(new Array()), true, 'An empty array')
	})

	it('returns FALSE when not passed an iterable', function () {
		assert.strictEqual(isIterable(undefined), false, 'Nothing')
		assert.strictEqual(isIterable(0), false, 'Zero')
		assert.strictEqual(isIterable(123), false, 'Number')
		assert.strictEqual(isIterable(null), false, 'null')
		assert.strictEqual(isIterable({}), false, 'Object')
		assert.strictEqual(isIterable(true), false, 'Bool - true')
	})
})