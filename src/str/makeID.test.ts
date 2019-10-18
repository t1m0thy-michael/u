const chai = require('chai')
const assert = chai.assert

import { makeID } from './makeID'

describe('makeID()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof makeID, 'function', 'Is a function')
	})

	it('Builds a string from prefix+given chars+suffix of given length', function () {
		const result = makeID(10, '_', '#', 'A')
		assert.strictEqual(result, '_AAAAAAAA#')
	})

	it('Builds a random string with default values', function () {
		const result1 = makeID()
		const result2 = makeID()
		assert.notEqual(result1, result2)
		assert.equal(result1.length, 8)
	})
})