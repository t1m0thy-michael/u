const chai = require('chai')
const assert = chai.assert

import { isFunction } from './isFunction'

describe('isFunction()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isFunction, 'function', 'Is a function')
	})

	it('returns TRUE when passed a function', function () {
		assert.strictEqual(isFunction(function () { }), true, 'Full fat function')
		assert.strictEqual(isFunction(() => { }), true, 'Arrow function')

		assert.strictEqual(isFunction(async function () { }), true, 'Full fat async function')
		assert.strictEqual(isFunction(async () => { }), true, 'Async arrow function')

		assert.strictEqual(isFunction(function* () { }), true, 'Generator function')
		assert.strictEqual(isFunction(async function* () { }), true, 'Async generator function')
	})

	it('returns FALSE when not passed a function', function () {
		assert.strictEqual(isFunction(undefined), false, 'Nothing')
		assert.strictEqual(isFunction(true), false, 'Bool - true')
		assert.strictEqual(isFunction(0), false, 'Zero')
		assert.strictEqual(isFunction(0.123), false, 'Float')
		assert.strictEqual(isFunction(123), false, 'Integer')
		assert.strictEqual(isFunction('str'), false, 'String')
		assert.strictEqual(isFunction('123'), false, 'Int string')
		assert.strictEqual(isFunction([]), false, 'Array')
		assert.strictEqual(isFunction({}), false, 'Object')
	})
})