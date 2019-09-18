const chai = require('chai')
const assert = chai.assert

import { isObject } from './isObject'

describe('isObject()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isObject, 'function', 'Is a function')
	})

	it('returns TRUE when passed a object', function () {
		assert.strictEqual(isObject({}), true, 'Empty object')
		assert.strictEqual(isObject({
			prop1: 'test'
		}), true, 'Object with properties')
	})

	it('returns FALSE when not passed a object', function () {
		assert.strictEqual(isObject(undefined), false, 'Nothing')
		assert.strictEqual(isObject('str'), false, 'String')
		assert.strictEqual(isObject('123'), false, 'Int string')
		assert.strictEqual(isObject(''), false, 'empty string')
		assert.strictEqual(isObject(null), false, 'null')
		assert.strictEqual(isObject([]), false, 'Array')
		assert.strictEqual(isObject(true), false, 'Bool - true')
	})
})