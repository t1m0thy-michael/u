const chai = require('chai')
const assert = chai.assert

import { isBetween } from './isBetween'

describe('isBetween()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isBetween, 'function', 'Is a function')
	})

	it('returns TRUE when vale is in range', function () {
		assert.strictEqual(isBetween(0, 10, 5), true)
	})

	it('returns FALSE when vale is not in range', function () {
		assert.strictEqual(isBetween(0, 10, 10.1), false)
	})
})