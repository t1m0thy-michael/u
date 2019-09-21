const chai = require('chai')
const assert = chai.assert

import { remove } from './remove'

describe('remove()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof remove, 'function', 'Is a function')
	})

	it('Removes correct position and length', function () {
		assert.strictEqual(remove('abcde', 1, 1), 'acde')
		assert.strictEqual(remove('abcde', 1, 2), 'ade')
		assert.strictEqual(remove('abcde', 2, 3), 'ab')
		assert.strictEqual(remove('abcde', 2, 30), 'ab')
	})
})

