const chai = require('chai')
const assert = chai.assert

import { isFn } from './isFn'

describe('isFn()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isFn, 'function', 'Is a function')
	})

	it('returns TRUE when passed a function', function () {
		assert.strictEqual(isFn(function () { }), true, 'Full fat function')
		assert.strictEqual(isFn(() => { }), true, 'Arrow function')
	})
	
	it('returns FALSE when not passed a function', function () {
		assert.strictEqual(isFn(undefined), false, 'Nothing')
		assert.strictEqual(isFn(true), false, 'Bool - true')
		assert.strictEqual(isFn(0), false, 'Zero')
		assert.strictEqual(isFn(0.123), false, 'Float')
		assert.strictEqual(isFn(123), false, 'Integer')
		assert.strictEqual(isFn('str'), false, 'String')
		assert.strictEqual(isFn('123'), false, 'Int string')
		assert.strictEqual(isFn([]), false, 'Array')
		assert.strictEqual(isFn({}), false, 'Object')
		
		assert.strictEqual(isFn(async function () { }), false, 'Full fat function')
		assert.strictEqual(isFn(async () => { }), false, 'Arrow function')
	})
})