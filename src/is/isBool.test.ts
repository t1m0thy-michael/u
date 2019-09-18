const chai = require('chai')
const assert = chai.assert

import { isBool } from './isBool'

describe('isBool()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isBool, 'function', 'Is a function')
	})

	it('returns TRUE when passed TRUE', function () {
		assert.strictEqual(isBool(true), true, 'true')
	})

	it('returns TRUE when passed FALSE', function () {
		assert.strictEqual(isBool(false), true, 'false')
	})

	it('returns FALSE when passed anything else', function () {
		assert.strictEqual(isBool(undefined), false, 'Nothing')
		assert.strictEqual(isBool(0), false, 'Zero')
		assert.strictEqual(isBool(123), false, 'Number')
		assert.strictEqual(isBool(''), false, 'Empty string')
		assert.strictEqual(isBool('str'), false, 'String')
		assert.strictEqual(isBool(null), false, 'null')
		assert.strictEqual(isBool({}), false, 'Object')
		assert.strictEqual(isBool([]), false, 'array')
	})
})