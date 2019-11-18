const chai = require('chai')
const assert = chai.assert

import { isAsyncFn } from './isAsyncFn'

describe('isAsyncFn()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isAsyncFn, 'function', 'Is a function')
	})

	it('returns TRUE when passed an async function', function () {
		assert.strictEqual(isAsyncFn(async function () { }), true, 'Full fat function')
		assert.strictEqual(isAsyncFn(async () => { }), true, 'Arrow function')
	})
	
	it('returns FALSE when not passed an async function', function () {
		assert.strictEqual(isAsyncFn(undefined), false, 'Nothing')
		assert.strictEqual(isAsyncFn(true), false, 'Bool - true')
		assert.strictEqual(isAsyncFn(0), false, 'Zero')
		assert.strictEqual(isAsyncFn(0.123), false, 'Float')
		assert.strictEqual(isAsyncFn(123), false, 'Integer')
		assert.strictEqual(isAsyncFn('str'), false, 'String')
		assert.strictEqual(isAsyncFn('123'), false, 'Int string')
		assert.strictEqual(isAsyncFn([]), false, 'Array')
		assert.strictEqual(isAsyncFn({}), false, 'Object')
		
		assert.strictEqual(isAsyncFn(function () { }), false, 'Full fat function')
		assert.strictEqual(isAsyncFn(() => { }), false, 'Arrow function')
	})
})