const chai = require('chai')
const assert = chai.assert

import { isType } from './isType'

describe('isType()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isType, 'function', 'Is a function')
	})

	it('returns true', function () {
		assert.strictEqual(isType('string', 'a string'), true, 'Strings')
		assert.strictEqual(isType('number', 123), true, 'Number')
		assert.strictEqual(isType('boolean', true), true, 'Boolean')
		assert.strictEqual(isType('object', {}), true, 'Object')
		assert.strictEqual(isType('object', []), true, 'Object (Array)')
		assert.strictEqual(isType('object', null), true, 'Object (Null)')
	})

	it('returns false', function () {
		assert.strictEqual(isType('string', 123), false, 'Strings')
		assert.strictEqual(isType('number', '123'), false, 'Number')
		assert.strictEqual(isType('boolean', 'true'), false, 'Boolean')
		assert.strictEqual(isType('object', undefined), false, 'Object')
	})
})